export type TopicKey =
  | "account"
  | "payments"
  | "getting-started"
  | "platforms"
  | "start-trading";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  href?: string;
  topic: TopicKey;
};

export const topics: { key: TopicKey; label: string; blurb: string }[] = [
  {
    key: "account",
    label: "Account registration & verification",
    blurb:
      "Find help on account creation, and learn how to easily verify your account for a secure and smooth trading experience.",
  },
  {
    key: "payments",
    label: "Deposit and withdrawal",
    blurb:
      "Explore various payment methods and get clear guidelines on how to seamlessly deposit and withdraw funds from your account",
  },
  {
    key: "getting-started",
    label: "Getting started with IVRFX",
    blurb:
      "Begin your trading journey with our step-by-step guide, from account opening to your first trades.",
  },
  {
    key: "platforms",
    label: "Our trading platforms",
    blurb:
      "We offer Web Trader, App, MT4, and MT5. Explore all to find the perfect fit for your trading style.",
  },
  {
    key: "start-trading",
    label: "Start trading with IVRFX",
    blurb:
      "Learn about instruments, indicators, and layouts to confidently begin your trading journey.",
  },
];

export const articles: Article[] = [
  {
    id: "indicators-in-depth",
    title: "How to add Technical Indicators for In-Depth Market Analysis on IVRFX",
    excerpt: "Enhance your charts with indicators like RSI, MACD and more in a few steps.",
    href: "#",
    topic: "start-trading",
  },
  {
    id: "transfer-between-accounts",
    title: "Transferring funds between trading accounts",
    excerpt: "Move funds quickly and securely between your live accounts.",
    href: "#",
    topic: "payments",
  },
  {
    id: "integrate-mt4-mt5",
    title: "Integrating MetaTrader 4 and 5 into your IVRFX account for Advanced Trading",
    excerpt: "Connect MT4/MT5 and unlock advanced tools and algos.",
    href: "#",
    topic: "platforms",
  },
];
