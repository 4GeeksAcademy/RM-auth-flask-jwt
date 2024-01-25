import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

const RequireAuth = ({children}) => {
    const isLogged = localStorage.getItem("token")
    console.log(isLogged)
    if (!isLogged) {
    return <Navigate to="/login" />
    }
    return children
}

export default RequireAuth