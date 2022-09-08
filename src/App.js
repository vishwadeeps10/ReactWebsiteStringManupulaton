import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

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
    <>
    <Router>
      <Navbar title="TextTilled" mode={mode} toggleMode={toggleMode} />
      <Routes>
          <Route exact path="about" element={<About />} />
          <Route path="/" element={<TextForm mode={mode} />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
