import axios from "axios";
import { API_APP } from "../VARIABLE";

const AuthServices = {
  // const {email, password} = props
  login({ email, password }) {
    return axios.post(`${API_APP}/login`, {
      email,
      password,
    });
  },
};

export default AuthServices;
