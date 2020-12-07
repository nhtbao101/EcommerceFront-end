import axios from "axios";
import API from "../config";

export const authentica = (data, next) => {
  if (typeof window !== "underfield") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = async (next) => {
  if (typeof window !== "underfield") {
    localStorage.removeItem("jwt");
    next();
    return await axios
      .get(`${API}/signout`)
      .then((res) => {
        console.log("signout", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
