import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "../src/components/dashboardComponent/index"
import Vehicle from "../src/components/vehicleComponent/vehicleGrid"
import Sale from "../src/components/saleComponent/saleGrid"
import Customer from "../src/components/customerComponent/customerGrid"
import VehicleDetail from "../src/components/vehicleComponent/vehicleDetail"

class App extends Component {
  render() {
    return (
      <Router> 
        <div className="routeContainer">
        <Route exact path="/" component={Dashboard} />
        <Route path="/vehicles/grid" component={Vehicle} />
        <Route path="/sales/grid" component={Sale} />
        <Route path="/customers/grid" component={Customer} />
        <Route path="/vehicles/detail" component={VehicleDetail} />
        </div>
      </Router> 
    );
  }
}

export default App;
