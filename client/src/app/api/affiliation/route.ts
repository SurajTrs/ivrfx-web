import { NextResponse } from "next/server";

export async function GET() {
  // In a real app, fetch from DB or external service
  const data = {
    accentColor: "#6f42c1",
    heroStats: [
      { label: "Partners", value: "13,000+" },
      { label: "Support countries", value: "200+" },
      { label: "Paid commissions", value: "300,000+" },
      { label: "Marketing tools", value: "200+" },
    ],
    rankingItems: [
      { serial: "1", maskedId: "****265", earned: "6,33,160" },
      { serial: "2", maskedId: "****275", earned: "5,54,220" },
      { serial: "3", maskedId: "****385", earned: "4,85,790" },
      { serial: "4", maskedId: "****392", earned: "4,33,280" },
      { serial: "5", maskedId: "****109", earned: "3,74,940" },
      { serial: "6", maskedId: "****392", earned: "59,480" },
      { serial: "7", maskedId: "****324", earned: "56,470" },
      { serial: "8", maskedId: "****121", earned: "48,740" },
      { serial: "9", maskedId: "****316", earned: "44,310" },
      { serial: "10", maskedId: "****105", earned: "37,740" },
    ],
    tiers: [
      {
        title: "Tier 1",
        reward: "$1,000",
        desc: "Basic CPA rewards",
        countries:
          "Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, Switzerland, United Arab Emirates, Austria, Denmark, Finland, Germany, Ireland, Italy, Netherlands, Sweden, Norway",
      },
      {
        title: "Tier 2",
        reward: "$800",
        desc: "Basic CPA rewards",
        countries:
          "Angola, Argentina, Brazil, Lesotho, Peru, Cyprus, Hungary, Lithuania, Luxembourg, South Africa",
      },
      {
        title: "Tier 3",
        reward: "$500",
        desc: "Basic CPA rewards",
        countries: "Other countries.",
      },
    ],
  };

  return NextResponse.json(data, { status: 200 });
}
