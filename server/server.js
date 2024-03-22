import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });
import express from "express";
import mongoose from "mongoose";
import path from "path";
import * as url from "url";

import { userRoutes } from "./routes/user.js";
import { tickerRoutes } from "./routes/watchlist.js";
import { getSECForm } from "./utils/getSECForm.js";
import { getStockData } from "./utils/getStockData.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  next();
})

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api/user", userRoutes);

app.use("/api/watchlist", tickerRoutes);

app.use("/api/getForm", (req, res) => {
  try {
    getSECForm(req.body.ticker, req.body.form, req.body.numberOfResults)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.use("/api/getData", (req, res) => {
  try {
    getStockData(req.body.ticker)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
