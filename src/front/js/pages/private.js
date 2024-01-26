import React, { useEffect, useState } from "react";

const Private = () => {
    const [isLogged, setIsLogged] = useState(null)
    useEffect(() => {
    setIsLogged(localStorage.getItem("token"))
    }, [])
    console.log(isLogged)
    return (
        <h1>Esta página es privada</h1>
    )
}

export default Private