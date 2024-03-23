import mongoose from "mongoose";
import { Ticker } from "../models/watchlistModel.js";

export const getAllTickers = async (req, res) => {
  const user_id = req.user._id;
  const tickers = await Ticker.find({ user_id }).sort({ createdAt: -1 });
  try {
    res.status(200).json(tickers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addTicker = async (req, res) => {
  const { ticker } = req.body;
  try {
    const user_id = req.user._id;
    const newTicker = await Ticker.create({ ticker, user_id });
    res.status(200).json(newTicker);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error. Is this ticker already in your watchlist?" });
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
