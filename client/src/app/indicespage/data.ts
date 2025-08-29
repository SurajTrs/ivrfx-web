export type IndexItem = {
  ticker: string;
  name: string;
  sell: number;
  buy: number;
  change: number; // percent
};

export const popularIndices: IndexItem[] = [
  { ticker: "US30", name: "Dow Jones 30", sell: 39520, buy: 39526, change: 0.18 },
  { ticker: "US100", name: "Nasdaq 100", sell: 18920, buy: 18926, change: -0.12 },
  { ticker: "US500", name: "S&P 500", sell: 5345, buy: 5349, change: 0.21 },
  { ticker: "DE40", name: "Germany 40 (DAX)", sell: 18450, buy: 18456, change: 0.05 },
  { ticker: "UK100", name: "FTSE 100", sell: 8320, buy: 8324, change: -0.08 },
  { ticker: "EU50", name: "Euro Stoxx 50", sell: 4915, buy: 4920, change: 0.10 },
  { ticker: "FRA40", name: "France 40 (CAC)", sell: 7840, buy: 7845, change: -0.06 },
  { ticker: "JP225", name: "Japan 225 (Nikkei)", sell: 40120, buy: 40135, change: 0.32 },
  { ticker: "HK50", name: "Hong Kong 50 (HSI)", sell: 17860, buy: 17872, change: -0.14 },
  { ticker: "AUS200", name: "Australia 200 (ASX)", sell: 7725, buy: 7730, change: 0.09 },
  { ticker: "INDIA50", name: "India 50 (NIFTY)", sell: 24350, buy: 24358, change: 0.27 },
  { ticker: "SPX500", name: "S&P 500 (CFD)", sell: 5344, buy: 5348, change: 0.19 },
  { ticker: "SA40", name: "South Africa 40", sell: 75120, buy: 75135, change: 0.22 },
];
