import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter an expense"],
  },
  amount: { type: Number, required: [true, "Please enter an expense"] },
});

const ExpenseSchema = mongoose.model("ExenseSchema", schema);

export default ExpenseSchema;
