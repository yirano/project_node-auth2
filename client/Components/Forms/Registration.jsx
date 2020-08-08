import React from "react";
import { Form } from "../../Utils/styled";

const Registration = () => {
  return (
    <div>
      <Form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </Form>
    </div>
  );
};

export default Registration;
