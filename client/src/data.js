export const BREAKEVEN_CALCS = [
  {
    name: "Long Call Breakeven",
    description: "Determine the price of an underlying security for a long call to breakeven at expiration",
    to: "/breakeven",
  },
  {
    name: "Long Put Breakeven",
    description: "Determine the price of an underlying security for a long put to breakeven at expiration",
    to: "/breakeven",
  },
  {
    name: "Short Call Breakeven",
    description: "Determine the price of an underlying security for a short call to breakeven at expiration",
    to: "/breakeven",
  },
  {
    name: "Short Put Breakeven",
    description: "Determine the price of an underlying security for a short put to breakeven at expiration",
    to: "/breakeven",
  },
];

export const SEC_FORMS = [
  {
    name: "Form 10-K",
    description:
      "Provides a comprehensive overview of the company's business and financial condition, including audited financial statements, management's discussion and analysis of financial conditions, and disclosures about market risk",
    to: "/secfilings",
  },
  {
    name: "Form 10-Q",
    description:
      "Quarterly update on a company's financial situation. It includes unaudited financial statements and provides insights into the company's performance throughout the year",
    to: "/secfilings",
  },
  {
    name: "Form 8-K",
    description:
      "Used by companies to report major events that shareholders should know about. These can include acquisitions, changes in leadership, earnings announcements, and other significant occurrences that could affect the company's stock price",
    to: "/secfilings",
  },
  {
    name: "Form 4",
    description:
      "Used by insiders (like officers, directors, and beneficial owners) to report trades of the company's stocks. It can be useful for tracking insider buying and selling activity, which some investors interpret as a signal of the company's future prospects",
    to: "/secfilings",
  },
];
