import React from "react";
import { Link } from "react-router-dom";

export default class Recruiter extends React.Component {
  render() {
    return (
      <div>
        <Link to="/recruiter/post-a-job">Post a job</Link>
      </div>
    );
  }
}
