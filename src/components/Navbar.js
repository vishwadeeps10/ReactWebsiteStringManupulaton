import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	const logout = () => {
		window.location.reload()
		localStorage.removeItem("token");
		localStorage.removeItem("isLoggedIn");
	};
	const [mode, setMode] = useState(sessionStorage.getItem("mode") || "light");

	const handleDarkMode = () => {
	  const newMode = mode === "light" ? "dark" : "light";
	  sessionStorage.setItem("mode", newMode);
	  setMode(newMode);
	};
	useEffect(() => {
		// Set initial styles based on stored mode
		if (mode === "dark") {
		  document.body.style.backgroundColor = "#222222";
		  document.body.style.color = "white";
	  
		  // Update input textbox styles for dark mode
		  const inputTextbox = document.querySelector('.input-textbox');
		  if (inputTextbox) {
			inputTextbox.style.backgroundColor = "#222222";
			inputTextbox.style.color = "white";
		  }
		} else {
		  document.body.style.backgroundColor = "white";
		  document.body.style.color = "black";
	  
		  // Reset input textbox styles for light mode
		  const inputTextbox = document.querySelector('.input-textbox');
		  if (inputTextbox) {
			inputTextbox.style.backgroundColor = "initial";
			inputTextbox.style.color = "initial";
		  }
		}
	  }, [mode]);
	  
	
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
		>
			<div className="container">
				<Link className="navbar-brand" to="/dashboard">
					<b>
						<i>TextMorph</i>
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
{/* 
						<Link className="nav-item nav-link " to="/about">
							About
						</Link> */}

						<Link className="nav-item nav-link " onClick={logout} to="/">
							logout
						</Link>
					</div>
				</div>
				{/* <div
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
				</div> */}

				{/* new dark mode */}
				<div class="custom-control custom-switch mt-3">
					<input type="checkbox" class="custom-control-input" id="darkModeToggle" checked={mode === "dark"} onClick={handleDarkMode} />
					<label class={`custom-control-label text-${mode === "dark"?"light":"dark"}`} for="darkModeToggle" >{mode === "dark"?"Light":"Dark"} Mode</label>
				</div>
			</div>
		</nav>
	);
}
