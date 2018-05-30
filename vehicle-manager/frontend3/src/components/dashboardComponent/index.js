import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbarComponent/navbar"
import logo from "../../logo.svg";
import "../../App.css";

class Dashboard extends Component {
  render() {
    return (
        <div className="App">
        <NavBar/>
        {/* End of Nav Bar */}
        <p className="dashboardContainer">
          Mock monthly data goes here
          <br /> high-level reports such as monthly customer acquisition,
          monthly revenue, monthly profits, etc.
        </p>
      </div> 
    );
  }
}

export default Dashboard;