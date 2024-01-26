import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const [token, setToken] = useState(null)
	useEffect(() => {
		setToken(sessionStorage.getItem('token'))
	}, [])
	const renderLink = () => {
		if(token) {
			return (
				<Link to="/">
					<button className="btn btn-danger" onClick={() => setToken(sessionStorage.removeItem('token'))}>Sign Out</button>
				</Link>
			)
		}else {
			return (
				<Link to="/login">
					<button className="btn btn-success" >Sign In</button>
				</Link>
			)
		}
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{renderLink()}
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
