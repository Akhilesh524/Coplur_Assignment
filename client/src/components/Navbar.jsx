import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-evenly" >
    <div className="container-fluid flex justify-around bg-blue-900 h-10 items-center text-blue-50">
    <Link to="/">Home</Link>
    <Link to="/Register">Register</Link>
    
    </div>
    
  </nav>
  </>
    

  )
}

export default Navbar
