import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const symbol = url.searchParams.get("symbol") || "%5EGSPC";
  const interval = url.searchParams.get("interval") || "1d";
  const range = url.searchParams.get("range") || "ytd";
  const period1 = url.searchParams.get("period1") || "1399827600";
  const period2 = url.searchParams.get("period2") || "1709176300";

  const apiUrl = `https://live-stock-market.p.rapidapi.com/v1/index/chart?symbol=${encodeURIComponent(symbol)}&interval=${interval}&range=${range}&period1=${period1}&period2=${period2}`;

  const rapidApiKey = process.env.RAPIDAPI_KEY;
  if (!rapidApiKey) {
    return NextResponse.json({ error: "Missing RAPIDAPI_KEY env variable" }, { status: 500 });
  }

  const response = await fetch(apiUrl, {
    headers: {
      "x-rapidapi-host": "live-stock-market.p.rapidapi.com",
      "x-rapidapi-key": rapidApiKey,
    },
    cache: "no-store",
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
