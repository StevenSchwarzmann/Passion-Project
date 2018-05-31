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
        <div className="clearfix">
        <Link to="/vehicles/detail" className="btn btn-primary btn-med btn-prim">         
          Add Vehicle
        </Link>
        </div> 
          <table cellpadding="10">
          <thead>
          <tr style={{"fontSize": 22 + "px"}}>
            <td>Make</td>
            <td>Model</td>
            <td>Type</td>
            <td>Year</td>
            <td>Color</td>
            <td>Price</td>
          </tr>
          </thead>
            <tbody className="table-hover">
              <td>make data</td>
              <td>model data </td>
              <td>Type data</td>
              <td>year data</td>
              <td>color data</td>
              <td>price data</td>
              <div className="edit-del-btns">edit/delete button</div>
            </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default Vehicle;
