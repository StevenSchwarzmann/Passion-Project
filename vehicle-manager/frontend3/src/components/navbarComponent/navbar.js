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
          <Link to="/">
            <a className="navA"> Home </a>
          </Link>
        </li>
        <li id="currentNavItem">
          <Link to="/vehicles/grid">
            <a className="navA"> Vehicles </a>
          </Link>
        </li>
        <li className="navItem">
          <Link to="/sales/grid">
            <a className="navA"> Sales </a>
          </Link>
        </li>
        <li className="navItem">
          <Link to="/customers/grid">
            <a className="navA"> Customers </a>
          </Link>
        </li>
      </ul>
    </header>
    </div>
    )}
}

export default NavBar;