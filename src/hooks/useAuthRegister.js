import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useAuthRegister = ({ email, password }) => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);

  return async () => {
    try {
      await axios({ bearer: false }).post("/auth/signup", {
        email,
        password,
      });
      modal.show("회원가입이 완료되었습니다!");
      return true;
    } catch (error) {
      modal.show(error.response.data.message);
      return false;
    }
  };
};

export default useAuthRegister;
