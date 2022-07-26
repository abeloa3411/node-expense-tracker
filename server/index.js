import cors from "cors";
import express from "express";
import expenses from "./routes/post.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = 5000;

app.use("/api/v1/post", expenses);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server is running on port ${PORT} ...`);
    });
  })
  .catch((error) => console.log(error));
