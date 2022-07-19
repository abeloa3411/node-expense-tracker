import axios from "axios";
import React, { useEffect, useState } from "react";

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
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Expense;
