import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import { useNavigate } from "react-router-dom";


function Login({loggedIn, setLoggedIn}) {
    const navigate = useNavigate();
    const tk = localStorage.getItem('tk');
    if(tk){
      setLoggedIn(true)
    }
  
    useEffect(() => {
        if(loggedIn){
            console.log(loggedIn)
            return navigate("/dashboard")
        }
    }, [loggedIn, setLoggedIn])
    
  return (
    <div className="login">
      <Navbar />
      <div className="container login-card-container d-flex justify-content-center align-items-center">
        <LoginCard  setLoggedIn={setLoggedIn}/>
      </div>
    </div>
  );
}

export default Login;
