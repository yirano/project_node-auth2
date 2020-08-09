import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Registration from "./Forms/Registration";
import Login from "./Forms/Login";
import PrivateRoute from "../Utils/ PrivateRoute";
import UserContainer from "./Users/UserContainer";
import StudentContainer from "./Users/StudentContainer";
import DepartmentContainer from "./Users/DepartmentContainer";
import Axios from "axios";

const App = () => {
  const history = useHistory();
  const handleClick = () => {
    Axios.get("http://localhost:4000/users/logout")
      .then((res) => {
        localStorage.removeItem("token");
        localStorage.removeItem("dept");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Link to="/registration">Register</Link>
      <Link to="/login">Log In</Link>
      <Link to="/logout" onClick={handleClick}>
        Log Out
      </Link>

      <PrivateRoute path="/admin" component={UserContainer} />
      <PrivateRoute path="/teacher" component={StudentContainer} />
      <PrivateRoute path="/student" component={DepartmentContainer} />
      <Switch>
        <Route path="/admin"></Route>

        <Route path="/registration">
          <Registration />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
