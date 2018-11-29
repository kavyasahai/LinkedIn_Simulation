import React from "react";
import { getJWTUsername } from "../common/auth";
import uuid from "uuidv4";
import axios from "axios";

const ROOT_URL = "http://localhost:3001";

export default class PostAJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminId: getJWTUsername(),
      jobId: uuid(),
      title: "",
      jobDescription: "",
      industry: "",
      employmentType: "",
      location: "",
      jobFunction: "",
      numberOfApplications: 10
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("username");
    axios({
      method: "post",
      url: ROOT_URL + "/recruiter/post-a-job",
      headers: {
        Authorization: token
      },
      data: this.state
    }).then(res => {
      if (res.data.success) {
        console.log('post success')
      } else {
        console.log('post not success')
        console.log(res.data)
      }
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <h3>Title</h3>
        <input type="text" name="title" onChange={ this.handleChange } required />
        <h3>Job Description</h3>
        <textarea
          name="jobDescription"
          onChange={ this.handleChange }
          minLength="10"
          maxLength="10000"
          placeHolder="min length of 10"
          required
        />
        <h3>Industry</h3>
        <input
          type="text"
          name="industry"
          onChange={ this.handleChange }
          required
        />
        <h3>Employment Type</h3>
        <input
          type="text"
          name="employmentType"
          onChange={ this.handleChange }
          required
        />
        <h3>Location</h3>
        <input
          type="text"
          name="location"
          onChange={ this.handleChange }
          required
        />
        <h3>Job Function</h3>
        <input
          type="text"
          name="jobFunction"
          onChange={ this.handleChange }
          required
        />
        <h3>Number of Applications</h3>
        <input
          type="number"
          name="numberOfApplications"
          onChange={ this.handleChange }
          value={ this.state.numberOfApplications }
        />
        <hr />
        <button onClick={ this.onSubmit } type="submit">
          Post
        </button>
      </div>
    );
  }
}
