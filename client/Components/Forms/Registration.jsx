import React from "react";
import { Form } from "../../Utils/styled";

const Registration = () => {
  return (
    <div>
      <Form>
        <div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
      </Form>
    </div>
  );
};

export default Registration;