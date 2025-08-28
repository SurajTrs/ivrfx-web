"use client";
import React, { useEffect, useState } from "react";
import AffiliateHero from "../../affiliationpage/AffiliateHero";
import AffiliateStats from "../../affiliationpage/AffiliateStats";
import AffiliateRanking from "../../affiliationpage/AffiliateRanking";
import AffiliateCalculator from "../../affiliationpage/AffiliateCalculator";
import AffiliateTiers from "../../affiliationpage/AffiliateTiers";
import AffiliateSubAffiliate from "../../affiliationpage/AffiliateSubAffiliate";
import AffiliateHowItWorks from "../../affiliationpage/AffiliateHowItWorks";
import AffiliateCTA from "../../affiliationpage/AffiliateCTA";
import AffiliateDisclaimer from "../../affiliationpage/AffiliateDisclaimer";

type RankItem = { serial: string; maskedId: string; earned: string };
type TierItem = { title: string; reward: string; desc: string; countries: string };
type Stat = { label: string; value: string };

export default function AffiliationPage() {
  const [accent, setAccent] = useState<string>("#6f42c1");
  const [heroStats, setHeroStats] = useState<Stat[] | null>(null);
  const [rankingItems, setRankingItems] = useState<RankItem[] | null>(null);
  const [tiers, setTiers] = useState<TierItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/affiliation", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load data (${res.status})`);
        const data = await res.json();
        if (!mounted) return;
        setAccent(data.accentColor ?? "#6f42c1");
        setHeroStats(data.heroStats ?? null);
        setRankingItems(data.rankingItems ?? null);
        setTiers(data.tiers ?? null);
        setLoading(false);
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message || "Failed to load");
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  return (
    <main>
      {/* Basic skeleton/fallbacks while loading */}
      <AffiliateHero
        accentColor={accent}
        heroStats={heroStats || undefined}
        rankingItems={rankingItems || undefined}
      />
      {/* Optional: Stats is already in Hero but we keep a dedicated section for reuse */}
      {/* <AffiliateStats accentColor={accent} /> */}
      <AffiliateCalculator accentColor={accent} />
      <AffiliateTiers accentColor={accent} tiers={tiers || undefined} />
      <AffiliateSubAffiliate accentColor={accent} />
      <AffiliateHowItWorks accentColor={accent} />
      <AffiliateCTA accentColor={accent} />
      <AffiliateDisclaimer />
      {error && (
        <div className="container"><div className="alert alert-warning mt-3">{error}</div></div>
      )}
    </main>
  );
}
