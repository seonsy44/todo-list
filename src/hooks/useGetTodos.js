import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useGetTodos = () => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);

  return async () => {
    try {
      const res = await axios({ bearer: true }).get("/todos");

      return res.data;
    } catch (error) {
      modal.show(error.response.data.message);
      return false;
    }
  };
};

export default useGetTodos;
