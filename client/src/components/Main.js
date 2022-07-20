import axios from "axios";
import React, { useState } from "react";
import "../index.css";

const Main = () => {
  const [item, setItem] = useState({ name: "", amount: "" });

  const submitData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/v1/post", item);
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Welcome to your Expense Traker</h2>
        </div>
        <div className="inner-container">
          <form className="inputs" onSubmit={submitData}>
            <div className="expense-input">
              <label htmlFor="expense">Enter the expense: </label>
              <input
                name="expense"
                type="text"
                className="expense"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div className="amount-input">
              <label htmlFor="amount">Enter amount: </label>
              <input
                name="amount"
                type="number"
                className="amount"
                value={item.amount}
                onChange={(e) => setItem({ ...item, amount: e.target.value })}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="add-btn">
                Add Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
