import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Expense = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const fetchedData = await axios.get("http://localhost:5000/api/v1/post");
      const { data } = fetchedData;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div className="items-container">
      {data.map((item, index) => {
        return (
          <div key={index} className="items">
            <div className="title">
              <h4>{item.name}</h4>
              <p>{item.amount}</p>
            </div>
            <div className="item-btn-container">
              <button className="edit-btn">
                <Link to={`/edit/${item._id}`}>
                  <AiOutlineEdit
                    style={{ fontSize: "1.5rem", marginRight: "4px" }}
                  />
                </Link>
              </button>
              <button className="delete-btn">
                <AiOutlineDelete style={{ fontSize: "1.5rem" }} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Expense;
