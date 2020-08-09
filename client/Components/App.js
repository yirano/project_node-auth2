import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import Registration from "./Forms/Registration"
import Login from "./Forms/Login"
import PrivateRoute from '../Utils/ PrivateRoute'
import UserContainer from './Users/UserContainer'
import Axios from 'axios'

const App = () => {

  const handleClick = () => {

    Axios.get('http://localhost:4000/users/logout')
      .then(res => {
        localStorage.removeItem('token')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Link to="/registration">Register</Link>
      <Link to="/login">Log In</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/logout" onClick={handleClick}>Log Out</Link>

      <Route path="/admin"></Route>

      <Route path="/registration">
        <Registration />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <PrivateRoute path="/admin" component={UserContainer} />
    </div>
  )
}

export default App
