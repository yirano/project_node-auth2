import React, { useState } from "react";
import { Form } from "../../Utils/styled";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const initialForm = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [form, setForm] = useState(initialForm);
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/users/login", form)
      .then((res) => {
        console.log("Log In ---> ", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("department", res.data.department);
        if (res.data.role === "dean") {
          history.push("/admin");
        } else if (res.data.role === "teacher") {
          history.push("/teacher");
        } else {
          history.push("/student");
        }
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
