import {
  createExpense,
  deleteData,
  postData,
  singleData,
} from "../controllers/post.js";
import express from "express";

const router = express.Router();

router.route("/").get(postData).post(createExpense);
router.route("/:id").get(singleData).delete(deleteData);

export default router;
