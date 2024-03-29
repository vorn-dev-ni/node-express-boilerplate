import express from "express";
import BlogController from "../controllers/BlogController.js";
export const blogRoute = express.Router();

blogRoute
  .post('/blog',BlogController.uploadMultiImage ,BlogController.postBlog)