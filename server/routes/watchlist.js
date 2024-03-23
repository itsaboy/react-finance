import express from "express";
import {
  getAllTickers,
  addTicker,
  deleteTicker,
} from "../controllers/watchlistController.js";
import { authCheck } from "../middleware/authCheck.js";

export const tickerRoutes = express.Router();

tickerRoutes.use(authCheck);

tickerRoutes.get("/", getAllTickers);

tickerRoutes.post("/", addTicker);

tickerRoutes.delete("/:id", deleteTicker);
