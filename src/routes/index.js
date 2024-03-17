
import express from "express";
import { HomeController } from "../controllers/index.js";
export const HomeRoute = express.Router()
HomeRoute.get('/',HomeController)
// define your other controller route handler here