import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbarComponent/navbar"
import logo from "../../logo.svg";
import "../../App.css";

class Sale extends Component {
    render() {
        return (
            <div className="saleGrid">
            <NavBar/>
            {/* End of Nav Bar */}
            <div className="saleGridContainer">
              Sale info displayed here
              <br /> Listings of customers : <ul><li>customer name</li><li>vehicle</li><li>invoice</li><li>paid</li><li>sale price</li><li>edit/delete buttons</li><li>add new customer button</li></ul>
            </div>
          </div> 
        );
      }
}

export default Sale;