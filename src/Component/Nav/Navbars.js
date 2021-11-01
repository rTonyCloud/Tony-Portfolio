import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo/logo.png'
import resume from '../../assets/resume.pdf'

// styles
import './Navbars.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

const Navbars = () => {

return (
<Router>
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
        </Container>
    </Navbar>
</div>
<div>
    <Switch>
        <Route path="/About">
            <About/>
        </Route>
        <Route path="/Contact">
            <Contact/>
        </Route>
        <Route path="/Home">
            <Home />
        </Route>
        <Route path="/Projects">
            <Projects/>
        </Route>
        
    </Switch>
</div>
</Router>
)
};

export default Navbars;