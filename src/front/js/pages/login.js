import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Login = () => {
    const {actions} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = {email: email, password: password}
    const login = () => {
        const token = localStorage.getItem('token')
        if(token != null && token != 'undefined') {
            window.location.href='/private'
        }else {
            alert("Revisa tu correo y contraseña")
        }
    }
    const handleClick = (data) => {
        if (email === '' || password === '') {
            return alert('Ambos campos son obligatorios')
        }
        console.log(data)
        actions.loginUser(data)
        login()
        // window.location.href="/private"
    }
    const handleSubmit = e => e.preventDefault()
    return (
        <>
            <h1 className="text-center">Ingresa a tu cuenta</h1>
            <form onSubmit={e => handleSubmit(e)} className="w-50 mx-auto border rounded-3 p-5">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Introduce el email con el que te registraste</label>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca utilizaremos tu email para otro proposito</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Introduce una contraseña"/>
                </div>
                <button type="submit" className="btn btn-outline-success" onClick={e => handleClick(data)}>Enviar</button>
            </form>
        </>
    )
}

export default Login