import React from "react";
// import { withRouter } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo/logo.png'
import resume from '../../assets/resume.pdf'

import { Link } from "react-router-dom";

// styles
import './Navbars.css'


const Navbars = () => {

return (
<div className="Nav">
    <Navbar claasName="Navbar" variant={"dark"} expand="lg">
        <Container>
            <Navbar.Brand href="http://localhost:3000/React-Portfolio"> 
            <img src={logo} alt="Logo" className="logo" />{' '}
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
                        <Nav.Link as={Link} to={"/Projects"}>Projects</Nav.Link>
                        <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
                        <button><a href={resume} download="resume.pdf">Download Resume</a></button>
                    </Nav>
                </Navbar.Collapse>
                <div>
                <a href="https://github.com/rTonyCloud/"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/tony-rivera-engineer/"><i class="fab fa-linkedin"></i></a>
                <a href="https://stackoverflow.com/users/15778624/tonycloud"><i class="fab fa-stack-overflow"></i></a>
                </div>
              
        </Container>
    </Navbar>
</div>



)
};



export default Navbars;