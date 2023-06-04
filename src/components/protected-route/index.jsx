import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = ({  redirectPath = "/login" }) => {
  const isAuth = localStorage.getItem('token')
  console.log(isAuth)
    if (!isAuth) {
      return  <Navigate to={redirectPath} replace={true} />;
    }  
    return  <Outlet />;
  };