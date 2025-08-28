import { useState, useEffect } from "react";

export function useLiveIndexPrice(symbol = "SPX") {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/twelvedata?symbol=${encodeURIComponent(symbol)}`)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => {
        // Twelve Data returns price as data.close
        const close = data?.close;
        if (close && !isNaN(Number(close))) {
          setPrice(Number(close));
        } else {
          setError("No price data");
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [symbol]);

  return { price, loading, error };
}
