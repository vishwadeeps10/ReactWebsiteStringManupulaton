import React from 'react'
import "./login.css"

export default function Login() {

   
  return (
  
    <div className='container' id="containerId"  >
        <h2 className='mb-3'>Login Here</h2>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="loginInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="loginInputPassword" placeholder="Enter Password" />
            </div>

            <button type="submit" id='buttonId' className="btn btn-primary btn-block mt-2 mb-2">Login</button>
        </form>
    </div>
   
  )
}
