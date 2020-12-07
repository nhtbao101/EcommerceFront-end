import API from "../config";
import axios from "axios";
export const signup = async (user) => {
  return await axios
    .post(`${API}/signup`, user)
    .then((res) => {
      console.log("res--dataAPI", res, "\n----data", res.data);
      return res;
    })
    .catch((error) => {
      //   console.info(error.config);
      if (error.response) {
        // response error
        console.log("error-dataAPI", error.response.data);
        return error.response.data;
      }
    });
};

export const signin = async (user) => {
  return await axios
    .post(`${API}/signin`, user)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    });
};
