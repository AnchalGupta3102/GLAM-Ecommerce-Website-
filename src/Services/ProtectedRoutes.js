import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const ProtectedRoutes = ()=>{
    const auth = localStorage.getItem("loggedIn");
return auth? <Outlet/>:<Navigate to={"/register"}/>
   

}
export default ProtectedRoutes;