import React from "react";
import { useEffect, useState } from "react";

const Aliusers = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data?.map((v, i) => {
        return (
          <div key={i}>
            {/* <img src="v.photo" alt="" /> */}
            <h1>Name:{v.name}</h1>
            <h1>Username:{v.username}</h1>
            <h1>Email:{v.email}</h1>
            <h1>City:{v.address.city}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Aliusers;
