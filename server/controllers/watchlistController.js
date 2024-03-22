import mongoose from "mongoose";
import { Ticker } from "../models/watchlistModel.js";

export const getAllTickers = async (req, res) => {
  const tickers = await Ticker.find({}).sort({ createdAt: -1 });
  try {
    res.status(200).json(tickers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addTicker = async (req, res) => {
  const { ticker } = req.body;
  try {
    const newTicker = await Ticker.addTicker(ticker);
    res.status(200).json(newTicker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTicker = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ticker id" });
  }

  const ticker = await Ticker.findOneAndDelete({ _id: id });
  if (!ticker) {
    return res.status(404).json({ error: "Ticker not found" });
  }

  res.status(200).json(ticker);
};
