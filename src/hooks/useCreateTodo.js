import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useCreateTodo = () => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);

  return async ({ todo }) => {
    try {
      const res = await axios({ bearer: true }).post("/todos", {
        todo,
      });

      return res.data;
    } catch (error) {
      modal.show(error.response.data.message);
      return false;
    }
  };
};

export default useCreateTodo;
