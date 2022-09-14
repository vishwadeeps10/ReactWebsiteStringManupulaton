import React, { useState } from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";


export default function Dashboard(props) {
	const [mode, setMode] = useState("light");

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
