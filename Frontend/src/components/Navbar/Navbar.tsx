import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar:FC = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <Link to={"/"} className="title-link">
        <h1 className='title'>Event Planner</h1>        
        </Link>
        <div className="nav-buttons">
        {/* <button className='btn btn-navbar'><i className="fa-solid fa-user"></i></button> */}
        <Link to={"/"}>
        <button className='btn btn-navbar'><i className="fa-solid fa-calendar"></i></button>
        </Link>
        
        <Link to={"/add-event"}>
          <button className='btn btn-navbar'>
          <i className="fa-solid fa-calendar"></i>
          <i className="fa-solid fa-plus"></i>
          </button>
        </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar