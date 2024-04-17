import express from "express";
import { qrRouter } from "./QR/index.js";
import { EmployeeRouter } from "./Employee/index.js";

 const router = express.Router()

router.use('/qr',qrRouter)
router.use('/emp',EmployeeRouter)
export default router