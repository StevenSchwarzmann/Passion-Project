import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";

class NavBar extends Component {
    render() {
        return (
    <div className="container">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to the Vehicle Management Page</h1>
      <ul id="navBar">
        <li className="navTitle">Vehicle Manager</li>
        <li className="navItem">
          <Link to="/" className="navA">
            Home 
          </Link>
        </li>
        <li id="currentNavItem">
          <Link to="/vehicles/grid" className="navA">
            Vehicles
          </Link>
        </li>
        <li className="navItem">
          <Link to="/sales/grid" className="navA">
           Sales
          </Link>
        </li>
        <li className="navItem">
          <Link to="/customers/grid" className="navA">
           Customers
          </Link>
        </li>
      </ul>
    </header>
    </div>
    )}
}

export default NavBar;