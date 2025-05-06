import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();


const app = express();


const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("DB connection successful 👍");
      })
      .catch((err) => {
        console.error("DB connection failed:", err);
      });
  };



const PORT = process.env.PORT || 7272;
app.listen(PORT, () => {
  connect();
  console.log(`Server started on port ${PORT}`);
});