import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const renderLink = () => {
		if(store.login === true) {
			return (
				<Link to="/">
					<button className="btn btn-danger">Sign Out</button>
				</Link>
			)
		}else {
			return (
				<Link to="/login">
					<button className="btn btn-success">Sign In</button>
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
