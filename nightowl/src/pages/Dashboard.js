import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import moonlight from "../assets/images/moonlight.svg";
import { Link, useNavigate } from "react-router-dom";

function Dashboard({loggedIn, setLoggedIn}) {
    const navigate = useNavigate();
    const tk = localStorage.getItem('tk');
    if(!tk){
      setLoggedIn(false)
    }
    console.log(tk)    
    useEffect(() => {
        if(!loggedIn) {
            return navigate("/")
        }
    }, [loggedIn])
  return (
    <div className="dashboard">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div className=" dash-container container d-flex justify-content-center align-items-center flex-column">
        <img src={moonlight} alt="moonlight" width={400} height={250} />
        <h4>
          Welcome to your dashboard,{" "}
          <span className="dashboard-span">Antony</span>
        </h4>
        <Link to="http://localhost:3001" className="fs-5 text-decoration-none" >HordesIO</Link>
      </div>
    </div>
  );
}

export default Dashboard;
