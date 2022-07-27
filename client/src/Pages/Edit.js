import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState({ name: "", amount: "" });
  const { id } = useParams();

  const getData = async () => {
    const res = await axios.get(`/api/v1/post/${id}`);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  });

  if (!data) {
    return null;
  }
  return (
    <div className="edit-container-main">
      <div className="edit-container">
        <div className="edit-items">
          <p>
            Name: <strong>{data.name}</strong>
          </p>
          <p>
            Load(kg): <strong>{data.amount}</strong>
          </p>
        </div>
        <div className="edit-inputs">
          <form>
            <div className="expense-input">
              <label htmlFor="expense">Update exercise: </label>
              <input
                name="expense"
                type="text"
                className="expense"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </div>
            <div className="amount-input">
              <label htmlFor="amount">Enter load: </label>
              <input
                name="amount"
                type="number"
                className="amount"
                value={item.amount}
                onChange={(e) => setItem({ ...item, amount: e.target.value })}
              />
            </div>
            <div className="btn-container">
              <button
                className="update-btn"
                type="submit"
                onClick={async () => {
                  const upData = axios.patch(`/api/v1/post/${item._id}`);
                  console.log(upData);
                }}
              >
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
