import React, { useState } from "react";
import { Form } from "../../Utils/styled";
import Axios from "axios";

const initialForm = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("https://yirano-auth2.herokuapp.com/users/login", form)
      .then((res) => {
        console.log("Log In ---> ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="login">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={form.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />
          <input type="submit" value="Log In" />
        </div>
      </Form>
    </div>
  );
};

export default Login;
