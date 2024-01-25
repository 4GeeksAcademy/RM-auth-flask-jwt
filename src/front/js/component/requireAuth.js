import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

const RequireAuth = ({children}) => {
    const {store} = useContext(Context)
    const isLogged = store.login
    console.log(isLogged)
    if (!isLogged) {
    return <Navigate to="/login" />
    }
    return children
}

export default RequireAuth