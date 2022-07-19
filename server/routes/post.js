import { createExpense, postData } from "../controllers/post.js";
import express from "express";

const router = express.Router();

router.route("/").get(postData).post(createExpense);

export default router;
