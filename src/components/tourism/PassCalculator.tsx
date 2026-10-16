"use client";

import React, { useState, useMemo } from "react";

type Canton = "ZH" | "BS" | "GE" | "VD" | "BE" | "ZG";

interface PeakCost {
  name: string;
  fullPrice: number;
  halfFarePrice: number;
  swissTravelPassDiscount: number; // percentage off (0=free, 50=50% off, 25=25% off)
  includedInTellPass: boolean;
  includedInBOPass: boolean;
}

const PEAKS: PeakCost[] = [
  { name: "Jungfraujoch (Top of Europe)", fullPrice: 232, halfFarePrice: 116, swissTravelPassDiscount: 25, includedInTellPass: false, includedInBOPass: false },
  { name: "Mt. Titlis (3,020m)", fullPrice: 110, halfFarePrice: 55, swissTravelPassDiscount: 50, includedInTellPass: true, includedInBOPass: false },
  { name: "Mt. Rigi", fullPrice: 72, halfFarePrice: 36, swissTravelPassDiscount: 0, includedInTellPass: true, includedInBOPass: false },
  { name: "Mt. Pilatus (Golden Round Trip)", fullPrice: 72, halfFarePrice: 36, swissTravelPassDiscount: 50, includedInTellPass: true, includedInBOPass: false },
  { name: "Glacier 3000 (Peak Walk)", fullPrice: 86, halfFarePrice: 43, swissTravelPassDiscount: 50, includedInTellPass: false, includedInBOPass: false },
  { name: "Matterhorn Glacier Paradise", fullPrice: 148, halfFarePrice: 74, swissTravelPassDiscount: 50, includedInTellPass: false, includedInBOPass: false },
  { name: "Stoosbahnen (World's Steepest)", fullPrice: 46, halfFarePrice: 23, swissTravelPassDiscount: 0, includedInTellPass: true, includedInBOPass: false },
  { name: "Stanserhorn CabriO", fullPrice: 76, halfFarePrice: 38, swissTravelPassDiscount: 0, includedInTellPass: true, includedInBOPass: false },
  { name: "Grindelwald First (Cliff Walk)", fullPrice: 44, halfFarePrice: 22, swissTravelPassDiscount: 0, includedInTellPass: false, includedInBOPass: true },
  { name: "Schilthorn Piz Gloria (007)", fullPrice: 98, halfFarePrice: 49, swissTravelPassDiscount: 50, includedInTellPass: false, includedInBOPass: false },
  { name: "Rochers-de-Naye (Montreux)", fullPrice: 64, halfFarePrice: 32, swissTravelPassDiscount: 0, includedInTellPass: false, includedInBOPass: false },
  { name: "Rhine Falls (Boat Cruise)", fullPrice: 8, halfFarePrice: 8, swissTravelPassDiscount: 0, includedInTellPass: false, includedInBOPass: false },
];

const PASS_PRICES = {
  swissTravel3Day: 244,
  swissTravel4Day: 279,
  swissTravel6Day: 349,
  swissTravel8Day: 399,
  swissHalfFare1Month: 120,
  tellPass3Day: 160,
  tellPass5Day: 200,
  boPass3Day: 170,
  boPass5Day: 210,
};

const SAVER_DAY_PASS = { withHalbtax: 29, withoutHalbtax: 52 };
const SBB_INTERCITY_DAY = { withHalbtax: 30, withoutHalbtax: 60 }; // avg intercity day travel

export default function PassCalculator() {
  const [numDays, setNumDays] = useState(5);
  const [selectedPeaks, setSelectedPeaks] = useState<string[]>(["Mt. Titlis (3,020m)", "Mt. Rigi"]);
  const [hasHalbtax, setHasHalbtax] = useState(false);
  const [canton, setCanton] = useState<Canton>("ZH");

  const togglePeak = (name: string) => {
    setSelectedPeaks((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const results = useMemo(() => {
    const peaks = PEAKS.filter((p) => selectedPeaks.includes(p.name));

    // Option A: Swiss Travel Pass cost
    let swissTravelPassCost = numDays <= 3 ? PASS_PRICES.swissTravel3Day
      : numDays <= 4 ? PASS_PRICES.swissTravel4Day
      : numDays <= 6 ? PASS_PRICES.swissTravel6Day
      : PASS_PRICES.swissTravel8Day;
    const peakCostWithSTP = peaks.reduce((sum, p) => {
      const discount = p.swissTravelPassDiscount;
      if (discount === 0) return sum + p.fullPrice; // free
      return sum + Math.round(p.fullPrice * (discount / 100));
    }, 0);
    const totalSTP = swissTravelPassCost + peakCostWithSTP;

    // Option B: Swiss Half Fare Card + Saver Day Passes
    const halfFareCardCost = PASS_PRICES.swissHalfFare1Month;
    const saverDayPassCost = numDays * (hasHalbtax ? SAVER_DAY_PASS.withHalbtax : SAVER_DAY_PASS.withoutHalbtax);
    const peakCostWithHF = peaks.reduce((sum, p) => sum + p.halfFarePrice, 0);
    const totalHF = (hasHalbtax ? 0 : halfFareCardCost) + saverDayPassCost + peakCostWithHF;

    // Option C: Tell-Pass (Central Switzerland focus)
    const tellPassCost = numDays <= 3 ? PASS_PRICES.tellPass3Day : PASS_PRICES.tellPass5Day;
    const peakCostWithTell = peaks.reduce((sum, p) =>
      p.includedInTellPass ? sum : sum + (hasHalbtax ? p.halfFarePrice : p.fullPrice), 0);
    const intercityToLucerne = numDays * (hasHalbtax ? SBB_INTERCITY_DAY.withHalbtax : SBB_INTERCITY_DAY.withoutHalbtax);
    const totalTell = (hasHalbtax ? 0 : halfFareCardCost) + tellPassCost + peakCostWithTell + intercityToLucerne;

    const winner = Math.min(totalSTP, totalHF, totalTell);
    return { totalSTP, totalHF, totalTell, winner, swissTravelPassCost, halfFareCardCost, peakCostWithSTP, peakCostWithHF, peakCostWithTell, saverDayPassCost, tellPassCost };
  }, [numDays, selectedPeaks, hasHalbtax, canton]);

  const options = [
    { label: "Swiss Travel Pass", total: results.totalSTP, color: "border-teal-500/40 bg-teal-500/5", accent: "text-teal-400",
      breakdown: [`Pass (${numDays}d): CHF ${results.swissTravelPassCost}`, `Peak extras: CHF ${results.peakCostWithSTP}`, `City trains: Included`] },
    { label: "Half Fare Card + Saver Day Passes", total: results.totalHF, color: "border-orange-500/40 bg-orange-500/5", accent: "text-orange-400",
      breakdown: [hasHalbtax ? "Halbtax: Already owned" : `Half Fare Card: CHF ${results.halfFareCardCost}`, `Saver Day Passes (${numDays}×): CHF ${results.saverDayPassCost}`, `Peaks at 50% off: CHF ${results.peakCostWithHF}`] },
    { label: "Tell-Pass (Central Switzerland)", total: results.totalTell, color: "border-purple-500/40 bg-purple-500/5", accent: "text-purple-400",
      breakdown: [hasHalbtax ? "Halbtax: Already owned" : `Half Fare Card: CHF ${results.halfFareCardCost}`, `Tell-Pass: CHF ${results.tellPassCost}`, `Other peaks: CHF ${results.peakCostWithTell}`] },
  ].sort((a, b) => a.total - b.total);

  return (
    <div className="glass rounded-2xl p-6 border border-blue-500/20">
      <h3 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>
        🎫 Swiss Pass Cost Calculator
      </h3>
      <p className="text-xs mb-6" style={{ color: "var(--text-2)" }}>
        See exactly which pass saves the most for your visiting parents or family. Approximate costs — always verify at sbb.ch before purchase.
      </p>

      {/* Inputs */}
      <div className="grid gap-5 md:grid-cols-3 mb-6">
        <div>
          <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Number of travel days
          </label>
          <input type="range" min={1} max={15} value={numDays} onChange={(e) => setNumDays(Number(e.target.value))}
            className="w-full accent-orange-500" />
          <div className="text-center mt-1 font-bold text-orange-400 text-lg">{numDays} days</div>
        </div>
        <div>
          <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Departure canton
          </label>
          <select value={canton} onChange={(e) => setCanton(e.target.value as Canton)}
            className="w-full rounded-lg border px-3 py-2 text-sm"
            style={{ background: "var(--surface)", color: "var(--text)", borderColor: "var(--border)" }}>
            {(["ZH", "BS", "GE", "VD", "BE", "ZG"] as Canton[]).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Resident has Halbtax?
          </label>
          <button onClick={() => setHasHalbtax(!hasHalbtax)}
            className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
              hasHalbtax ? "bg-green-500 text-white" : "glass border"
            }`}
            style={hasHalbtax ? {} : { color: "var(--text-2)" }}>
            {hasHalbtax ? "✅ Yes — using Companion Discount" : "No Halbtax"}
          </button>
        </div>
      </div>

      {/* Peak Selector */}
      <div className="mb-6">
        <label className="block text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
          Select Mountains & Attractions to Visit
        </label>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {PEAKS.map((peak) => (
            <button key={peak.name} onClick={() => togglePeak(peak.name)}
              className={`rounded-lg px-3 py-2 text-xs text-left transition-all border ${
                selectedPeaks.includes(peak.name) ? "border-orange-500 bg-orange-500/10 text-orange-400" : "glass"
              }`}
              style={selectedPeaks.includes(peak.name) ? {} : { color: "var(--text-2)" }}>
              <div className="font-semibold">{peak.name}</div>
              <div className="mt-0.5 opacity-75">Full: CHF {peak.fullPrice} · 50% off: CHF {peak.halfFarePrice}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-4 md:grid-cols-3">
        {options.map((opt, idx) => (
          <div key={opt.label} className={`rounded-xl border p-4 ${opt.color} ${idx === 0 ? "ring-2 ring-offset-0 ring-orange-500" : ""}`}>
            {idx === 0 && (
              <div className="text-xs font-bold text-green-400 mb-2">✅ BEST VALUE</div>
            )}
            <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${opt.accent}`}>{opt.label}</div>
            <div className="text-3xl font-black mb-3" style={{ color: "var(--text)" }}>
              CHF {opt.total}
            </div>
            <ul className="space-y-1">
              {opt.breakdown.map((line) => (
                <li key={line} className="text-xs" style={{ color: "var(--text-2)" }}>· {line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs" style={{ color: "var(--text-3)" }}>
        * Approximate costs based on 2025/26 prices. Verify exact fares at{" "}
        <a href="https://www.sbb.ch/en" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">sbb.ch</a> and{" "}
        <a href="https://www.swisstravelsystem.com/en/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">swisstravelsystem.com</a>.
      </p>
    </div>
  );
}
