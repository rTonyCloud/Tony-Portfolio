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
            <Navbar.Brand href="/"> 
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
                </div>
        </Container>
    </Navbar>
</div>


/* <div>
    <Switch>
        <Route path="/About" exact component={About}>
            <About/>
        </Route>
        <Route path="/Contact" exact component={Contact}>
            <Contact/>
        </Route>
        <Route path="/Projects" exact component={Projects}>
            <Projects/>
        </Route>
        <Route path="/" exact component={Home} >
            <Home />
        </Route>
    </Switch>
</div> */


)
};



export default Navbars;