import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, redirect, isPermitted }) => {
  if (isPermitted) return element;

  return <Navigate to={redirect} />;
};

export default ProtectedRoute;
