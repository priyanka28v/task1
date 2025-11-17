import { Navigate, Outlet } from "react-router-dom";

export const Protected = () => {
  const isLogin = localStorage.getItem("isLoginUser"); 
  return isLogin === "true" ? <Outlet /> : <Navigate to="/login " />;
};
