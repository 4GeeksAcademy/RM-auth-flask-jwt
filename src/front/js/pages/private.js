import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Private = () => {
    const isLogged = sessionStorage.getItem("token")
    console.log(isLogged)
    const {store} = useContext(Context)
    console.log(store.token)
    return (
        <h1>Esta página es privada</h1>
    )
}

export default Private