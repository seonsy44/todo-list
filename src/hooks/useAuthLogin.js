import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useAuthLogin = ({ email, password }) => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);
  return async () => {
    try {
      const res = await axios({ bearer: false }).post("/auth/signin", {
        email,
        password,
      });
      const { access_token } = res.data;
      localStorage.setItem("token", access_token);
      return true;
    } catch (error) {
      modal.show(error.response.data.message);
      return false;
    }
  };
};

export default useAuthLogin;
