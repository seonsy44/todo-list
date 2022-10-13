import axios from "axios";
import { useCallback } from "react";

const DEFAULT_CONFIG = {
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: { "Content-Type": "application/json" },
};

const Instance = axios.create(DEFAULT_CONFIG);
const BearerInstance = axios.create(DEFAULT_CONFIG);

const useAxios = () => {
  const token = localStorage.getItem("token");

  return useCallback(
    ({ bearer = false }) => {
      if (!bearer) return Instance;

      BearerInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;

      return BearerInstance;
    },
    [token]
  );
};

export default useAxios;
