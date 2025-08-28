export type CategoryKey = "about" | "account" | "data" | "deposits" | "trading";

export type FAQ = {
  id: string;
  q: string;
  a: string;
  category: CategoryKey;
};

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "about", label: "About Us" },
  { key: "account", label: "Account & Verification" },
  { key: "data", label: "Data Protection" },
  { key: "deposits", label: "Deposits & Withdrawals" },
  { key: "trading", label: "Trading & Platform" },
];

export const faqs: FAQ[] = [
  { id: "about-1", q: "Who are we and what do we offer?", a: "We are a global multi-asset broker offering CFDs across Forex, Indices, Commodities, Shares, ETFs and more—backed by robust platforms and education.", category: "about" },
  { id: "about-2", q: "Are you regulated?", a: "Yes. We operate under multiple entities, each regulated by their respective authorities. See Our Group page for details.", category: "about" },

  { id: "account-1", q: "How do I open and verify my account?", a: "Sign up online, complete your profile, and upload proof of identity and address. Verification typically completes within 1–2 business days.", category: "account" },
  { id: "account-2", q: "What documents are required?", a: "A valid government-issued ID and recent proof of address (utility bill/bank statement) dated within the last 3 months.", category: "account" },

  { id: "data-1", q: "How do you protect my personal data?", a: "We apply encryption in transit and at rest, role-based access controls, and comply with applicable privacy regulations.", category: "data" },
  { id: "data-2", q: "Can I request my data or delete my account?", a: "Yes. Submit a request via Support to access or delete your data, subject to regulatory record-keeping obligations.", category: "data" },

  { id: "deposits-1", q: "What deposit methods do you support?", a: "Cards, bank transfer, and popular e-wallets in selected regions. Availability varies by country and regulator.", category: "deposits" },
  { id: "deposits-2", q: "How long do withdrawals take?", a: "We aim to process withdrawals within 1 business day. Your bank or provider may add additional time.", category: "deposits" },

  { id: "trading-1", q: "Which platforms can I use?", a: "Trade on MT4, MT5, and our Web Platform. Mobile apps are available for iOS and Android.", category: "trading" },
  { id: "trading-2", q: "What are your typical spreads?", a: "Spreads vary by instrument, market conditions, and regulator. See the product pages or platform for live quotes.", category: "trading" },
];
