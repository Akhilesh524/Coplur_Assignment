import React from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom';
function Header() {
  return (
   <>
    <div className='header'>Hello Techies
    <Link to='/form' className='link'>EmployeeForm</Link>
    </div> 
   </>
   
   
  )
}

export default Header;