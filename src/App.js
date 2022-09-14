import "./App.css";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
