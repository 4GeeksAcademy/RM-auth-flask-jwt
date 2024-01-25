import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Signup = () => {
    const {store, actions} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = {email: email, password: password, is_active: true}
    const handleClick = (data, e) => {
        e.preventDefault()
        if (email === '' || password === '') {
            alert('Ambos campos son obligatorios')
        }else {
            actions.crearUsuario(data)
        }
        
    }
    return (
        <>
            <form className="w-50 mx-auto">
                <h1 className="text-center">Introduce tus datos pata registrarte:</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Tu email"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Introduce una contraseña"/>
                </div>
                <button type="submit" className="btn btn-outline-success" onClick={e => handleClick(e)}>Enviar</button>
            </form>
        </>
    )
}

export default Signup