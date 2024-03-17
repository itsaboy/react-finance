import express from "express";

import {
  createNewWorkout,
  getAllWorkouts,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

export const workoutRouter = express.Router();

// GET requests
workoutRouter.get("/", getAllWorkouts);

workoutRouter.get("/:id", getOneWorkout);

// POST requests
workoutRouter.post("/", createNewWorkout);

// DELETE requests
workoutRouter.delete("/:id", deleteWorkout);

// UPDATE requests
workoutRouter.patch("/:id", updateWorkout);
