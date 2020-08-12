import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import MyProfile from './MyProfile.jsx'
import AboutUs from './AboutUs.jsx'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="App">
            <Link to="/">Home</Link>
            <Link to="/my-profile">My Profile</Link>
            <Link to="/about-us">About us</Link>
            <hr/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/my-profile" component={MyProfile}></Route>
            <Route path="/about-us" component={AboutUs}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
