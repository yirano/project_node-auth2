import React from "react";
import { Form } from "../../Utils/styled";

const Login = () => {
  return (
    <div>
      <Form>
        <div>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>
      </Form>
    </div>
  );
};

export default Login;
