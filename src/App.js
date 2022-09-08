
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";


function App() {
  const [mode ,setMode] = useState('light');
 
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='rgb(48 69 90)';
    document.body.style.color='white';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
  }
}
  return (
    <>
<Navbar title="TextTilled" mode={mode} toggleMode={toggleMode}/>
<TextForm mode={mode}/>
{/* <About/> */}
    </>
  );
}

export default App;
