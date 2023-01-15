import { Navigate } from "react-router-dom";
import { UserAuth } from "./screens/auth/UserAuth";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
