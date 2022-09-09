import React, { useState } from 'react'

export default function TextForm(props) {
    let setUpperCase =()=>{
        let upper = text.toUpperCase();
        setText(upper)
    }
    let setlowerCase =()=>{
        let lower = text.toLowerCase();
        setText(lower)
    }
    let setcapitalize =()=>{
        let capitalize = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();;
        setText(capitalize)
    }
    let setclear =()=>{
        let clear = "";
        setText(clear)
    }
    let handleOnchange =(event)=>{
        console.log("on change.")
        setText(event.target.value);
    }
    let removeSpaces =()=>{
  
        let newText = text.split(/[ ]+/); //using rejax 
        setText(newText.join(" "))
    }
    let handleCopy= ()=>{
        var text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text,setText] = useState("This is dummy text   .");
  return (
    <>
    <div className="container mt-3">
            <h3>Enter Your text to analyze</h3>
            <div className="mb-3">
            <label htmlFor="myText" className="form-label">Enter your text here: </label>
            <textarea className="form-control"   value={text} onChange={handleOnchange}  id="myText" rows="5"></textarea>
            </div>
        <button className="btn btn-success " onClick={setUpperCase}>Convert to Upper</button>
        <button className="btn btn-success m-2" onClick={setlowerCase}>Convert to lower</button>
        <button className="btn btn-success m-1" onClick={setcapitalize}>Capitalize first</button>
        <button className="btn btn-success m-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success m-1" onClick={removeSpaces}>Remove extra spaces</button>
        <button className="btn btn-success m-1" onClick={setclear}>Clear Text</button>
    </div>
    <div className="container mt-2">
        <h3>Your text summary:</h3>
        <p><b>{text.split(" ").length}</b> words <b>{text.length}</b> characters.</p>
        <h3>Priview</h3>
        <p>{text?text:"Enter something in textbox please."}</p>
    </div>
    </>
  )
}
