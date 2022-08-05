import React from 'react'
import LOGO from '../media/LOG.png'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return  (
    <>   
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a classNameName="header__logo" to="#"><img src={LOGO} alt="MANIPAL UNIVERSITY" />    
</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Resgistration</NavLink>
      </li>     
    </ul>    
      
  </div>
</nav>
<div className='header' id='myHeader'>
</div>


 </>
  )
}

export default Navbar