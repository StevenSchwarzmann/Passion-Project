import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbarComponent/navbar"
import VehicleDetail from "./vehicleDetail"
import logo from "../../logo.svg";
import "../../App.css";

class Vehicle extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>
        
        <div className="vehicleContentContainer">
        <div className="row">
        <Link to="/vehicles/detail" className="btn btn-primary btn-med btn-prim">         
          Add Vehicle
        </Link>
        </div> 
          <div id="subtitle" className="row">
            <div className="col-1">Make</div>
            <div className="col-1">Model</div>
            <div className="col-2">Type</div>
            <div className="col-1">Year</div>
            <div className="col-2">Color</div>
            <div className="col-2">Price</div>
            <div className="col-3">Edit/Delete button column</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vehicle;
