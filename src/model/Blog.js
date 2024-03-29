import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    min: [1, "Title is too short"],
    max: [200, "Title must be less than 200"],
  },
  images: {
    type: Array,
    default: ["1711643188075.jpeg"], // Corrected default value
  },
});

export const BlogModal = mongoose.model("Blog", BlogSchema);
~