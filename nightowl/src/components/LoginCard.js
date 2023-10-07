import React, {useState, useEffect} from "react";
import camping from '../assets/images/night.svg';
import axios from "axios";

function LoginCard({setLoggedIn}) {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function loginRequest(e){
    const payload = {username, password}
    console.log(JSON.stringify(payload))
    e.preventDefault()
 
  const options = {
    url: `http://localhost:3000/api/v1/auth/login`,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data: payload
  };

  axios(options)
    .then(response => {
      console.log(response.data)
      if( response.status === 201){
        setLoggedIn(true)
        localStorage.setItem("tk", response.data["token"])
      }
    })
    .catch(error => console.log(error));

  }
  // useEffect(() => {
  //   console.log(password)
  // }, [password])
  
  return (
    <div className="login-card py-4 px-4 d-flex justify-content-center align-items-center">
      <div className="card-1 d-none d-sm-none d-md-block d-lg-block">
        <img src={camping} width={350} height={300} alt="camping" />
      </div>
      <div className="card-2 w-75">
        <h3 className="login-title text-center pt-2 pb-2">Log in</h3>
        <div className="container px-5 mt-5">
          <form className="" onSubmit={loginRequest}>
            <div className="form-group pb-3">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                className="form-control"
                id="exampleInputUsername"
                aria-describedby="usernameHelp"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <small id="emailHelp" className="form-text">
                We'll never share your data with anyone else.
              </small>
            </div>
            <div className="form-group py-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-check py-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Terms, conditions & Privacy Policy
              </label>
            </div>
            <button type="submit" className="btn btn-danger login-btn ">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
