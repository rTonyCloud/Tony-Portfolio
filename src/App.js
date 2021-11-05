import React from 'react';
// boootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// helmet
import {Helmet} from 'react-helmet';

// pages
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Nav from "./Component/Nav/Navbars"
import Projects from "./Component/Projects/Projects"




import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



// components
import './App.css';



<Helmet>
<meta charSet="utf-8" />
<title>Tony River'a Full-Stack</title>
<link rel="canonical" href="/" />
<meta name="description" content="Tony River'a Full-Stack" />
</Helmet>

function App() {
  return (
  <Router>
    <div className="App">
    <div>

      <nav>
        <Nav />
      </nav>
      
      <div>
        <Switch>
          <Route path="/About" component={About}>
          </Route>
          <Route path="/Projects" component={Projects}>
          </Route>
          <Route  path="/Contact" component={Contact}>
          </Route>
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
      </div>
        <footer>
          <Footer />
        </footer>
    </div>
  </div>
</Router>
  );
}

export default App;
