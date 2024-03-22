import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });

export const getSECForm = async (ticker, form, numberOfResults) => {
  const req = "https://api.sec-api.io";
  const res = await fetch(req, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.EDGAR_KEY,
    },
    body: JSON.stringify({
      query: {
        query_string: {
          query: `ticker:${ticker} AND formType:"${form}"`,
        },
      },
      from: "0",
      size: numberOfResults,
      sort: [{ filedAt: { order: "desc" } }],
    }),
  });
  const data = await res.json();
  const formattedData = data.filings;
  return formattedData;
};
