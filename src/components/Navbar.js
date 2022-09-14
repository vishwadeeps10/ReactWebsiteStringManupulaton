import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("isLoggedIn");
	};	
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
		>
			<div className="container">
				<Link className="navbar-brand" to="/dashboard">
					<b>
						<i>Texttilled</i>
					</b>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-item nav-link active" to="/dashboard">
							Home <span className="sr-only">(current)</span>
						</Link>

						<Link className="nav-item nav-link " to="/about">
							About
						</Link>
						<Link className="nav-item nav-link " onClick={logout} to="/">
							logout
						</Link>
						{/* <Link className="nav-item nav-link " to="login">
              Login
            </Link> */}
					</div>
				</div>
				<div
					className={`custom-control custom-switch text-${props.mode === "light" ? "dark" : "light"
						}`}
				>
					<input
						type="checkbox"
						onClick={props.toggleMode}
						className="custom-control-input"
						data-toggle="toggle"
						id="customSwitches"
					/>
					<label className="custom-control-label " htmlFor="customSwitches">
						Dark Mode
					</label>
				</div>

				{/*  */}
			</div>
		</nav>
	);
}
