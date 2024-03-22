import express from "express";
import {
  getAllTickers,
  addTicker,
  deleteTicker,
} from "../controllers/watchlistController.js";

export const tickerRoutes = express.Router();

tickerRoutes.get("/", getAllTickers);

tickerRoutes.post("/", addTicker);

tickerRoutes.delete("/:id", deleteTicker);
