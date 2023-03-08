import React from 'react'
import "../App.css";
import Navbar from './Navbar'
import bg1 from './../bg1.svg';
import bg2 from './../bg2.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
    return(
        <div className="home">
            <div className="row">
                <nav className="navbar-orig col-sm-12 col-md-12 ">
            
                    <ul className="navbar">
                    
                        
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        
                        
                    </ul>    
                    <br></br>     
                </nav>

            </div>
        
            <div className="row">
                <div className="col-md-6 col-sm-12">
                <h1>Lorem ipsum</h1>
                <h3>Lorem ipsum asoajbs uoa ibdiabd uh aisdiasli a uaisdg laisdilag augi uaLI li ualisugliaugs lia siaug iag ifiagiy i giy silegfsile ils iysg is i lsv isvei vsf vsif vsi si vLorem ipsum asoajbs uoa ibdiabd uh aisdiasli a uaisdg laisdilag augi uaLIli ualisugliaugs lia siaug iag ifiagiy i giy silegfsile ils iysg is i lsv isvei vsf vsif vsi si v  </h3>
                </div>
                <div className="col-md-6 col-sm-12">
                <img src={bg1} ></img>
                </div>
            </div>
        </div>
    )
}

export default Home