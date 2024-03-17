import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

export const userRoutes = express.Router();

// login

userRoutes.post("/login", loginUser)

// signup

userRoutes.post("/signup", signupUser)