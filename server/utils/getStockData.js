import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });

export const getStockData = async (ticker) => {
  const req = `https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${process.env.FMP_KEY}`;
  const res = await fetch(req);
  const data = await res.json();
  console.log(data);
  return data;
};
