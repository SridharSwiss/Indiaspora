-- Community Hub Schema
-- Phase 1: Verified Directory tables
-- Phase 3: Classifieds / Community Pulse tables

-- Enable pgvector extension (required before knowledge_chunks table)
CREATE EXTENSION IF NOT EXISTS vector;

-- ──────────────────────────────────────────────
-- VERIFIED DIRECTORY
-- ──────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.directory_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  last_verified_at timestamptz,

  -- Identity
  name text NOT NULL,
  category text NOT NULL CHECK (category IN (
    'restaurant', 'grocery', 'catering', 'home_chef',
    'tax_advisor', 'immigration_lawyer', 'insurance', 'mortgage',
    'doctor', 'ayurveda', 'yoga', 'dentist',
    'driving_instructor', 'threading_salon', 'temple',
    'association', 'other'
  )),

  -- Location
  city text NOT NULL,
  canton text NOT NULL,
  address text,
  google_maps_url text,

  -- Contact
  website_url text,
  phone text,
  email text,

  -- Content
  description text,
  languages_spoken text[] DEFAULT '{}',
  cuisine_type text,    -- for restaurants
  speciality text,      -- for professionals

  -- Ratings
  community_rating numeric(2,1) CHECK (community_rating >= 1 AND community_rating <= 5),
  rating_count integer DEFAULT 0,

  -- Moderation
  is_verified boolean DEFAULT false,
  is_published boolean DEFAULT false,
  flagged_as_outdated boolean DEFAULT false,
  flag_count integer DEFAULT 0,
  submitted_by_email text,

  -- SEO
  slug text UNIQUE
);

CREATE INDEX idx_directory_category ON public.directory_listings(category);
CREATE INDEX idx_directory_canton ON public.directory_listings(canton);
CREATE INDEX idx_directory_published ON public.directory_listings(is_published);

-- RLS
ALTER TABLE public.directory_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published listings"
  ON public.directory_listings FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can submit listings"
  ON public.directory_listings FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- ──────────────────────────────────────────────
-- CLASSIFIEDS (Community Pulse)
-- ──────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.classifieds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  expires_at timestamptz DEFAULT (now() + interval '60 days') NOT NULL,

  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,

  category text NOT NULL CHECK (category IN (
    'nachmieter',     -- apartment takeover
    'moving_sale',    -- selling household items
    'carpooling',     -- shared rides / luggage
    'parents_companion', -- walking buddy / temple companion
    'job_board',      -- community job postings
    'services',       -- freelance / tutoring
    'other'
  )),

  title text NOT NULL,
  description text NOT NULL,

  -- Location
  city text,
  canton text,

  -- For Nachmieter
  rent_chf integer,
  rooms numeric(3,1),
  available_from date,

  -- For Carpooling
  from_city text,
  to_city text,
  travel_date date,

  -- Contact
  contact_via text CHECK (contact_via IN ('email', 'whatsapp', 'phone')),
  contact_value text,    -- stored encrypted or hashed

  -- Moderation
  is_published boolean DEFAULT false,
  is_flagged boolean DEFAULT false
);

CREATE INDEX idx_classifieds_category ON public.classifieds(category);
CREATE INDEX idx_classifieds_canton ON public.classifieds(canton);
CREATE INDEX idx_classifieds_expires ON public.classifieds(expires_at);

ALTER TABLE public.classifieds ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published classifieds"
  ON public.classifieds FOR SELECT
  USING (is_published = true AND expires_at > now());

CREATE POLICY "Users manage own classifieds"
  ON public.classifieds FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- ──────────────────────────────────────────────
-- AI SEARCH KNOWLEDGE BASE
-- ──────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.knowledge_chunks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,

  source_url text NOT NULL,
  source_title text NOT NULL,
  page_path text,          -- e.g. /living/krankenkasse

  chunk_text text NOT NULL,
  chunk_index integer NOT NULL,

  embedding vector(1536),  -- OpenAI text-embedding-3-small dimensions

  language text DEFAULT 'en',
  last_indexed_at timestamptz DEFAULT now()
);

CREATE INDEX idx_knowledge_page ON public.knowledge_chunks(page_path);

-- Similarity search function
CREATE OR REPLACE FUNCTION public.search_knowledge(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 5
)
RETURNS TABLE (
  id uuid,
  source_title text,
  source_url text,
  page_path text,
  chunk_text text,
  similarity float
)
LANGUAGE sql STABLE
AS $$
  SELECT
    id,
    source_title,
    source_url,
    page_path,
    chunk_text,
    1 - (embedding <=> query_embedding) AS similarity
  FROM public.knowledge_chunks
  WHERE 1 - (embedding <=> query_embedding) > match_threshold
  ORDER BY embedding <=> query_embedding
  LIMIT match_count;
$$;

ALTER TABLE public.knowledge_chunks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read knowledge" ON public.knowledge_chunks FOR SELECT USING (true);

-- ──────────────────────────────────────────────
-- DIRECTORY FLAGS (community reporting)
-- ──────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.directory_flags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  listing_id uuid REFERENCES public.directory_listings(id) ON DELETE CASCADE,
  reason text CHECK (reason IN ('closed', 'wrong_info', 'moved', 'spam', 'other')),
  details text,
  reporter_email text
);

ALTER TABLE public.directory_flags ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can flag" ON public.directory_flags FOR INSERT WITH CHECK (true);
