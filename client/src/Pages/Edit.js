import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/api/v1/post/${id}`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  });

  if (!data) {
    return null;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.amount}</p>
    </div>
  );
};

export default Edit;
