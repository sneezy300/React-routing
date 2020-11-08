import React from 'react';
import {BrowserRouter as AppRouter, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import ServiceDetails from './ServiceDetails';
const Router = () => {
  return (
    <AppRouter>
        <nav>
            <Link to="/">Home</Link>
            <hr/>
            <Link to="/about">About</Link>
            <hr/>
            <Link to="/contact">Contact</Link>
            <hr/>
            <Link to="/services">Services</Link>

        </nav>

        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route exact path="/services" component={Services}/>
        <Route path="/services/:id" component={ServiceDetails}/>
    </AppRouter>
  );
}
export default Router;