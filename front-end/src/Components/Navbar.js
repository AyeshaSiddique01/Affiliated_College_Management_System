import React from 'react'
import 'boxicons'
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className='Navbar'>
           <a href="#" className='nav-logo'><box-icon type='logo' name='edge' animation='tada' color='white' size='45px'></box-icon>xaminer Portal</a>
           {/* <box-icon name='menu' color='white' size='45px'></box-icon> */}
           <div className='nav-items'>
           <a href="/Home">Home</a>            
           <a href="/Notifications">Requests</a>    
           <a href="/DuePaper">Due Paper</a>         
           <a href="ResultPending">Result Pending</a> 
           </div>
           <div className='header-btn'>
           <a href="/Profile" className='progap'><box-icon name='user-circle' size='30px' color="white"></box-icon></a>            
           <a href="/SignupPersonalInfo" className='progap'><box-icon name='log-out' size='30px' color="white"></box-icon></a>
           <a href="/Settings" className='progap'><box-icon name='cog' size='30px' color="white"></box-icon></a> 
           </div>
           <div className='header-btn'>
           <a href="/SignupPersonalInfo" className='signlog'>Sign Up</a>            
           <a href="/Login" className='signlog'>Log In</a>
           </div>
           <div className='VerNavbar'>
           <div className='vernav'>
           <a href="/Home">Home</a>            
           <a href="/Notifications">Requests</a>    
           <a href="/DuePaper">Due Paper</a>         
           <a href="ResultPending">Result Pending</a> 
           </div>
        </div>   
        {/* <div className='VerNavbar'>
      <div className='vernav'>
        <NavLink exact to="/" activeClassName="active">Home</NavLink>            
        <NavLink to="/Notifications" activeClassName="active">Requests</NavLink>    
        <NavLink to="/DuePaper" activeClassName="active">Due Paper</NavLink>         
        <NavLink to="/ResultPending" activeClassName="active">Result Pending</NavLink> 
      </div>
    </div> */}
      </div>
      

    )
  }
  
  export default Navbar