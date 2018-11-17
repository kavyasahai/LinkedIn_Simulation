import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";
import { BrowserRouter, Link, Route } from "react-router-dom";

import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
const token = localStorage.getItem("token");
//create the Navbar Component
class Home extends Component {
  render() {
    return (
      <div>
        <h1>
          This LinkedIn Simulation is under development. <br />Coming Soon :)
        </h1>
      </div>
    );
  }
}

//export Home Component
export default Home;
