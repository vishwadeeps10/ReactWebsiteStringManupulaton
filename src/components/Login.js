import React,{ useState, useEffect }  from 'react'
import "./login.css"





export default function Login() {
  
  const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('https://localhost:7110/api/UserRegister/login',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
        
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   
  return (
  
    <div className='container' id="containerId"  >
        <h2 className='mb-3'>Login Here</h2>
        <form >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="email"  className="form-control" id="loginInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"  className="form-control" id="loginInputPassword" placeholder="Enter Password" />
            </div>

            <button type="submit" id='buttonId' className="btn btn-primary btn-block mt-2 mb-2">Login</button>
        </form>
    </div>
   
  )
}
