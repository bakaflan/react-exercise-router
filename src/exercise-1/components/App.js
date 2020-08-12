import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home.jsx'
import MyProfile from './MyProfile.jsx'
import AboutUs from './AboutUs.jsx'
import Products from './Products';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="App">
            <header>
            <NavLink exact activeStyle={{textDecoration: 'underline'}} to="/">Home</NavLink>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/products" >Products</NavLink>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/my-profile">My Profile</NavLink>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/about-us">About us</NavLink>
            </header>
            {/* <hr/> */}
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/my-profile" component={MyProfile}></Route>
            <Route exact path="/about-us" component={AboutUs}></Route>
            <Route exact path="/products" component={Products}></Route>
            <Route exact path="/products/:id" component={Product}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
