import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import UserCard from "./UserCard";
import { Dashboard } from "../../Utils/styled";

const UserContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:4000/users/")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h4>Hello Dean,</h4>
      <Dashboard>
        {data.map((d) => (
          <UserCard data={d} />
        ))}
      </Dashboard>
    </div>
  );
};

export default UserContainer;
