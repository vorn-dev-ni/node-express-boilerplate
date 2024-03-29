import express from "express";
import ImageController from "../controllers/ImageController.js";
export const imageRoute = express.Router();

imageRoute
  .route("/upload")
  .post(ImageController.uploadSingleImage, ImageController.saveImage);
  
  imageRoute
  .route("/upload/multi")
  .post(ImageController.uploadSingleImage, ImageController.saveImage);