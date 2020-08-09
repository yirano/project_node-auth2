import axios from "axios";
import { groupEnd } from "console";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const department = localStorage.getItem("department");

  return axios.create({
    // baseURL: "https://yirano-auth2.herokuapp.com/users",
    withCredentials: true,
    // headers: {
    //   Authorization: token,
    //   department: department,

    // },
    xsrfCookieName: 'XSRF-TOKEN',
  });
};
