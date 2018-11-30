import React, { Component } from "react";
import Header from "../Header/header";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Header />
        <p className="notfound">The page you have requested does not exist.</p>
      </div>
    );
  }
}

export default NotFound;
