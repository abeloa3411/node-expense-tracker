import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expenses from "./routes/post.js";
import cors from "cors";

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
