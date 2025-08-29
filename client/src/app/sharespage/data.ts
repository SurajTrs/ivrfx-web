export type Row = { ticker: string; name: string; sell: string; buy: string; change: string };

export const popular: Row[] = [
  { ticker: "AAPL", name: "Apple Inc.", sell: "227.15", buy: "227.35", change: "+0.84%" },
  { ticker: "TSLA", name: "Tesla, Inc.", sell: "245.20", buy: "245.55", change: "-1.12%" },
  { ticker: "AMZN", name: "Amazon.com, Inc.", sell: "176.30", buy: "176.55", change: "+0.42%" },
  { ticker: "MSFT", name: "Microsoft Corp.", sell: "415.05", buy: "415.35", change: "+0.21%" },
  { ticker: "GOOGL", name: "Alphabet Inc. (Class A)", sell: "161.40", buy: "161.65", change: "+0.35%" },
  { ticker: "META", name: "Meta Platforms, Inc.", sell: "489.10", buy: "489.60", change: "-0.28%" },
  { ticker: "NVDA", name: "NVIDIA Corporation", sell: "870.50", buy: "871.20", change: "+1.15%" },
  { ticker: "NFLX", name: "Netflix, Inc.", sell: "640.80", buy: "641.20", change: "+0.05%" },
  { ticker: "AMD", name: "Advanced Micro Devices, Inc.", sell: "162.70", buy: "163.00", change: "-0.44%" },
  { ticker: "INTC", name: "Intel Corporation", sell: "34.60", buy: "34.68", change: "+0.18%" },
  { ticker: "PYPL", name: "PayPal Holdings, Inc.", sell: "63.10", buy: "63.25", change: "-0.09%" },
];
