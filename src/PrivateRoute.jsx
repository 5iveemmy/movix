import { Navigate } from "react-router-dom";
import { useAuthValue } from "./auth/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuthValue();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
