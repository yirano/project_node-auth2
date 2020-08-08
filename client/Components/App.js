import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Registration from "./Forms/Registration";
import Login from "./Forms/Login";

const App = () => {
  return (
    <div>
      <Link to="/registration">Register</Link>
      <Link to="/login">Log In</Link>
      <Link to="/admin">Admin</Link>

      <Route path="/admin"></Route>

      <Route path="/registration">
        <Registration />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
};

export default App;
