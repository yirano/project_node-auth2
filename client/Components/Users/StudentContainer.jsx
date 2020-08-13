import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import UserCard from "./UserCard";
import { Dashboard } from "../../Utils/styled";

const StudentContainer = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:4000/users/students")
      .then((res) => {
        console.log(res);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h4>Hello Teacher,</h4>
      <Dashboard>
        {students.map((s) => (
          <UserCard data={s} />
        ))}
      </Dashboard>
    </div>
  );
};

export default StudentContainer;
