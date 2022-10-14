import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useAuthLogin = () => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);
  return async ({ email, password }) => {
    try {
      const res = await axios({ bearer: false }).post("/auth/signin", {
        email,
        password,
      });
      const { access_token } = res.data;
      localStorage.setItem("token", access_token);
      return true;
    } catch (error) {
      const { data } = error.response;
      if (data.statusCode === 404) modal.show(data.message);
      else if (data.statusCode === 401)
        modal.show("비밀번호를 다시 확인해 주세요.");
      return false;
    }
  };
};

export default useAuthLogin;
