import axios from "axios"
import { groupEnd } from 'console'

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token")
  return axios.create({
    // baseURL: "https://yirano-auth2.herokuapp.com/users",
    withCredentials: true,
    headers: {
      Authorization: token
    }
  })
}
