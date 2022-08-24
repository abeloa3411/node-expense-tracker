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

  const exp = [];
  if (!data.name) {
    exp.push("name");
  }
  if (!data.amount) {
    exp.push("amount");
  }
  if (exp.length > 0) {
    res.status(400).json({ error: "enter the fields", exp });
  }

  const newExpense = new ExpenseSchema(data);
  try {
    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const singleData = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await ExpenseSchema.findOne({ _id: id });
    res.status(200).json(expense);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await ExpenseSchema.findOneAndDelete({ _id: id });
    res.status(200).json(expense);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  const data = {
    name: req.body.name,
    amount: req.body.amount,
  };
  if (!data) {
    res.status(400).json({ error: "Please update all fields" });
  }
  try {
    const expense = await ExpenseSchema.updateOne({ _id: id }, { $set: data });
    res.status(200).json(expense);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
