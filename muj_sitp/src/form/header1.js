import React from 'react'
import './header.css' 
import LOGO from './media/LOGO.png'




const Header=()=>{
    return(
    <div className='header' id='myHeader'>
    <div className="header__logo">
    <img src={LOGO} alt="MANIPAL UNIVERSITY"  />
        <span>SCHOLARSHIP REGISTRATION FORM</span>
    </div>
    </div>
    )
}


export default Header;