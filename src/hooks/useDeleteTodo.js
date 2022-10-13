import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useDeleteTodo = () => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);

  return async ({ id }) => {
    try {
      await axios({ bearer: true }).delete(`/todos/${id}`);
      return true;
    } catch (error) {
      modal.show(error.response.data.message);
      return false;
    }
  };
};

export default useDeleteTodo;
