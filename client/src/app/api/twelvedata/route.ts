import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const symbol = url.searchParams.get("symbol") || "SPX"; // S&P 500 index symbol for Twelve Data
  const apikey = process.env.TWELVEDATA_API_KEY;
  if (!apikey) {
    return NextResponse.json({ error: "TWELVEDATA_API_KEY not set" }, { status: 500 });
  }

  // Twelve Data endpoint for price quote
  const apiUrl = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbol)}&apikey=${apikey}`;

  const response = await fetch(apiUrl, { cache: "no-store" });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
