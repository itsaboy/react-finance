import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tickerSchema = new Schema({
  ticker: {
    type: String,
    required: true,
    unique: true,
  },
});

tickerSchema.statics.addTicker = async function (ticker) {
  const tickerExists = await this.findOne({ ticker });
  if (tickerExists) {
    throw Error("Ticker is already saved");
  }

  const newTicker = await this.create({ ticker });
  return newTicker;
};

export const Ticker = mongoose.model("Ticker", tickerSchema);
