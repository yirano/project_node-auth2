import React, { useState } from "react"
import { useHistory } from 'react-router-dom'
import { Form } from "../../Utils/styled"
import Axios from "axios"


const initialState = {
  username: "",
  password: "",
  department: "",
  firstname: "",
  lastname: ""
}
const Registration = () => {
  const [form, setForm] = useState(initialState)
  const history = useHistory()
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    Axios.post('http://localhost:4000/users/register', form)
      .then(res => {
        console.log(res)
        history.push('/student')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="First Name" value={form.firstname} onChange={handleChange} name="firstname" />
          <input type="text" placeholder="Last Name" value={form.lastname} onChange={handleChange} name="lastname" />
        </div>
        <div>
          <input type="text" placeholder="Username" value={form.username} onChange={handleChange} name="username" />
          <input type="password" placeholder="Password" value={form.password} onChange={handleChange} name="password" />
          <input type="text" placeholder="Department" value={form.department} onChange={handleChange} name="department" />
          <input type="text" placeholder="Role" name="role" onChange={handleChange} value={form.role} />
          <input type="submit" value="Register" />
        </div>
      </Form>
    </div>
  )
}

export default Registration
