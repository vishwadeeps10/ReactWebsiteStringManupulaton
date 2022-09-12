import React,{ useState }  from 'react';
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




export default function Login() {
  
const[email, setEmail] = useState("")
const[password, setpassword] = useState("")
let navigate = useNavigate();

 //console.log({email, password});
const handleEmail = (event)=>{
  setEmail(event.target.value)
}
const handlePassword = (event)=>{
setpassword(event.target.value)
}
const handlesubmit = async (e)=>{
  e.preventDefault();
  console.log({email, password})
 axios.post('https://reqres.in/api/login',{
  email:email,
  password:password
 })
 .then(result=>{
  console.log(result.data);
  localStorage.setItem('token',result.data.token)
  navigate("../dashboard", { replace: true });
 })
 .catch(error=>{
  console.log(error);
  alert("ERROR::: "+ error)
 })
}
   
  return (
  
    <div className='container' id="containerId"  >
        <h2 className='mb-3'>Login Here</h2>
        <form  onSubmit={handlesubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" value={email} onChange={handleEmail}  className="form-control" id="loginInputEmail" aria-describedby="emailHelp" placeholder="Enter email" required />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"  value={password} onChange={handlePassword} className="form-control" id="loginInputPassword" placeholder="Enter Password" required />
            </div>

            <button type="submit"  id='buttonId' className="btn btn-primary btn-block mt-2 mb-2">Login</button>
        </form>
    </div>
   
  )
}
