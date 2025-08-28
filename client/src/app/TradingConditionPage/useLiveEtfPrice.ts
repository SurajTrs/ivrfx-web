import { useState, useEffect } from "react";

const ETF_SYMBOLS: Record<string, string> = {
  "S&P 500 ETF Trust - SPDR": "SPY",
  "QQQ": "QQQ",
  "GLD": "GLD",
  "Technology Select Sector SPDR": "XLK",
};

export function useLiveEtfPrice(asset: string) {
  const symbol = ETF_SYMBOLS[asset];
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(!!symbol);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!symbol) return;
    setLoading(true);
    setError(null);
    fetch(`/api/market?symbol=${encodeURIComponent(symbol)}`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        const close = data?.chart?.result?.[0]?.indicators?.quote?.[0]?.close;
        if (close && close.length > 0) {
          setPrice(close[close.length - 1]);
        } else {
          setError("No price data");
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [symbol]);

  return { price, loading, error };
}
