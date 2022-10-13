import { useContext } from "react";
import { AlertModalContext } from "../contexts/alertModalContext";
import useAxios from "./useAxios";

const useUpdateTodo = () => {
  const axios = useAxios();
  const modal = useContext(AlertModalContext);

  return async ({ id, todo, isCompleted }) => {
    try {
      const res = await axios({ bearer: true }).put(`/todos/${id}`, {
        todo,
        isCompleted,
      });

      return res.data;
    } catch (error) {
      modal.show(error.response.data.message);
      return false;
    }
  };
};

export default useUpdateTodo;
