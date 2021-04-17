import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../../images/wedding-couple.png'
import './NavHead.css';
const NavHead = () => {
    return (
        <div>
            <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Brand className="text-white align-items-center" href="#home" ><span id="brand">DESTINATION WEDDING</span><img id="navImg" src={image} alt=""/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            </Nav>
            <Nav className="ms-auto">
            <Link className="nav-link mr-5 ms-5 text-white" to="/home">Home</Link>
            <Link className="nav-link mr-5 ms-5 text-white " to="/login">Login</Link>
            <Link className="nav-link mr-5  ms-5 text-white" to="dashboard">Dashboard</Link>
            <Link className="nav-link mr-5  ms-5 text-white" to="#">Contact Us</Link>
            </Nav>
            </Navbar.Collapse>
           </Navbar>
        </div>
    );
};

export default NavHead;