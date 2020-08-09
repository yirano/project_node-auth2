import axios from "axios"

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token")
  return axios.create({
    // baseURL: "https://yirano-auth2.herokuapp.com/users",
    headers: {
      Authorization: token,
      cookies: token
    },
  })
}
