import ExpenseSchema from "../model/postModel.js";

export const postData = async (req, res) => {
  try {
    const expense = await ExpenseSchema.find();
    res.status(200).json(expense);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const createExpense = async (req, res) => {
  const data = {
    name: req.body.name,
    amount: req.body.amount,
  };

  const newExpense = new ExpenseSchema(data);
  try {
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
