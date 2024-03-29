import mongoose from "mongoose";

const uri = process.env.MONGO_LOCAL;
export const dbConnect = () => {
  mongoose
    .connect(uri)
    .then((result) => {
      console.log("db is connected");
    })
    .catch((error) => console.error(error));
};
