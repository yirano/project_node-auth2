import React, { useState } from "react"
import { Form } from "../../Utils/styled"


const initialState = {
  username: "",
  password: "",
  department: "",
}
const Registration = () => {
  const [form, setForm] = useState()
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
          <input type="text" placeholder="Department" />
        </div>
      </Form>
    </div>
  )
}

export default Registration
