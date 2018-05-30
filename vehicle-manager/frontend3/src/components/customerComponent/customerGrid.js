import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbarComponent/navbar"
import "../../App.css";
import logo from "../../logo.svg"

class Customer extends Component {
    render() {
        return (
            <div className="customerGrid">
            <NavBar/>
            {/* End of Nav Bar */}
            <div className="customerGridContainer">
              Customer info displayed here
              <br /> Listings of customers : <ul><li>first name</li><li>last name</li><li>email address</li><li>phone number</li><li>edit/delete buttons</li><li>add new customer button</li></ul>
            </div>
          </div> 
        );
      }
}

export default Customer;