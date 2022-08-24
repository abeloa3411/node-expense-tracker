import cors from "cors";
import express from "express";
import expenses from "./routes/post.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/v1/post", expenses);

const PORT = process.env.PORT || 3000;

//deploment

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("hey there API is running");
  });
}

//deployment

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server is running on port ${PORT} ...`);
    });
  })
  .catch((error) => console.log(error));
