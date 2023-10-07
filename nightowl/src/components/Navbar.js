import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar({loggedIn, setLoggedIn}) {
    function handleLogout(){
        setLoggedIn(false)
        localStorage.removeItem("tk")
    }
  
  return (
    <div className='container py-3 navbar'>
        <h4 className='fs-4'>
        Nightowl<span className='io'>IO</span>
        </h4>
        {
            !loggedIn ? "" : <Link className='logout' onClick={handleLogout}>Log out</Link> 
        }
    </div>
  )
}

export default Navbar