import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <b><i>{props.title}</i></b>
        </a>
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
            <a className="nav-item nav-link active" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link " href="/">
              Contact
            </a>
            <a className="nav-item nav-link " href="/">
              About
            </a>
            
          </div>

        </div>
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" data-toggle="toggle" id="customSwitches" />
  <label className="custom-control-label " htmlFor="customSwitches">Dark Mode</label>
</div>

{/*  */}

      </div>
    </nav>
  );
}
