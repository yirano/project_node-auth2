import React, { useState, useEffect } from "react";
import { Dashboard } from "../../Utils/styled";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import UserCard from "../Users/UserCard";

const DepartmentContainer = () => {
  const [dept, setDept] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:4000/users/department")
      .then((res) => {
        console.log(res);
        setDept(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4>Hello Student,</h4>
      <Dashboard>
        {dept.map((s) => (
          <UserCard data={s} />
        ))}
      </Dashboard>
    </div>
  );
};

export default DepartmentContainer;
