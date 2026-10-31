// Open-source LLM via any OpenAI-compatible endpoint (Hugging Face router, Groq,
// Together, Ollama, vLLM …). Configure with OSS_LLM_BASE_URL / OSS_LLM_API_KEY / OSS_LLM_MODEL.
const BASE = process.env.OSS_LLM_BASE_URL || "https://router.huggingface.co/v1";
const MODEL = process.env.OSS_LLM_MODEL || "meta-llama/Llama-3.3-70B-Instruct";

export const llmConfigured = () => !!process.env.OSS_LLM_API_KEY;
export const llmModel = () => MODEL;

export async function llmWrite(system: string, user: string, maxTokens = 400): Promise<string | null> {
  if (!llmConfigured()) return null;
  try {
    const res = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OSS_LLM_API_KEY}` },
      body: JSON.stringify({
        model: MODEL, max_tokens: maxTokens, temperature: 0.6,
        messages: [{ role: "system", content: system }, { role: "user", content: user }],
      }),
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) return null;
    const j = await res.json();
    const t = j?.choices?.[0]?.message?.content;
    return typeof t === "string" ? t.trim() : null;
  } catch {
    return null;
  }
}

export const EDITOR_SYSTEM =
  "You are the warm, concise editor of Indiaspora, a community hub for Indians living in Switzerland. " +
  "Write plain text only (no markdown, no emojis, no links). Use ONLY the facts given; never invent events, dates, numbers, names or quotes. " +
  "If something is not in the input, do not mention it.";
