import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import channels from "./routes/channels.js";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";


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


app.use(cookieParser());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/channels", channels);

app.use((err,req,res,next)=> {
  const status = err.status || 500;
  const message = err.message || "Something went Wrong.";
  res.status(status).json({
    success: false,
    status,
    message,
  });
});

const PORT = process.env.PORT || 7272;
app.listen(PORT, () => {
  connect();
  console.log(`Server started on port ${PORT}`);
});