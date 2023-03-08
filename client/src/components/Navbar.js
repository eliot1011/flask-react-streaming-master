import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../App.css";
import 'bootstrap/dist/css/bootstrap.css';
//import { Link, NavLink } from 'react-router-dom' <li><Link to="/">Home</Link></li> <li><Link to="/login">Login</Link></li>

const Navbar = () => {
    return(
        <nav className="navbar-orig">
                
                <ul className="navbar">
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/webcam">Webcam</Link></li> 
                    
                </ul>    
                <br></br>     
        </nav>
    )
}
export default Navbar;