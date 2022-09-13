import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { useNavigate } from "react-router-dom";

export default function Dashboard(props) {
	const [mode, setMode] = useState("light");

	//authenticate if user is login or not
	let navigate = useNavigate();
	useEffect(() => {
		//Runs only on the first render
		let isAuth = localStorage.getItem("isLoggedIn");
		if (isAuth == null || isAuth === "null") {

			navigate("../", { replace: true });
		} 

	}, []);


	//darkmode 
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "rgb(48 69 90)";
			document.body.style.color = "white";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
		}
	};
	return (
		<div>
			<Navbar mode={mode} toggleMode={toggleMode} />
			<TextForm mode={mode} />
		</div>
	);
}
