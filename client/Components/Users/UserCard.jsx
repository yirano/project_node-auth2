import React from "react";
import { Card } from "../../Utils/styled";

const UserCard = (props) => {
  return (
    <Card>
      <p>Name: {props.data.username}</p>
      <p>Role: {props.data.role}</p>
      <p>Department: {props.data.department}</p>
    </Card>
  );
};

export default UserCard;
