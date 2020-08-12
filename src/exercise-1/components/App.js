import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link, NavLink } from 'react-router-dom'
import Home from './Home.jsx'
import MyProfile from './MyProfile.jsx'
import AboutUs from './AboutUs.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="App">
            <header>
            <NavLink exact activeStyle={{textDecoration: 'underline'}} to="/">Home</NavLink>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/my-profile">My Profile</NavLink>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/about-us">About us</NavLink>
            </header>
            {/* <hr/> */}
            <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/my-profile" component={MyProfile}></Route>
            <Route path="/about-us" component={AboutUs}></Route>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
