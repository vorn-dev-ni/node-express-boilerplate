import compression from "compression";
import morgan from "morgan";
import { HomeRoute } from "./routes/index.js";
import express from "express";
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(compression());
app.use("/api", HomeRoute);
export default app;
// app.use(CustomMiddleware)
// define your other middleware route handler here
