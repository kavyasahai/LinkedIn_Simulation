import React, { Component } from "react";
import Header from "../Header/head";
import "../../css/connectionList.css";
import supportingimage5 from "../../images/supportingImage5.png";
import { getJWTUsername } from "../common/auth";
import { getPostedJobs } from "../../actions/recruiterActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ViewPostedJobs extends Component {
  componentDidMount() {
    var username = getJWTUsername();
    this.props.getPostedJobs(username);
  }

  render() {
    console.log(this.props.posted_jobs.payload);
    if (
      this.props.posted_jobs.payload &&
      this.props.posted_jobs.payload.length === 0
    )
      return (
        <React.Fragment>
          <Header />
          <p className="notfound">You haven't posted any jobs yet</p>
        </React.Fragment>
      );
    else {
      return (
        <div>
          <div>
            <Header />
          </div>
          <div style={{ "padding-top": "7vw" }} />
          <div class="row">
            <div class="postedJobs">
              <div className="jobData">
                {this.props.posted_jobs.payload &&
                  this.props.posted_jobs.payload.map(data => (
                    <div key={data.firstname}>
                      <div class="row">
                        <div class="col-6" style={{ paddingTop: "2vw" }}>
                          <Link
                            to={{
                              pathname: "/job/edit",
                              state: {
                                jobId: data._id
                              }
                            }}
                          >
                            <h1>
                              {data.title}, {data.company}, {data.location}
                            </h1>
                          </Link>

                          <br />
                          <div>
                            <p style={{ "font-size": "2rem" }}>
                              {data.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
              </div>
            </div>

            <div className="image5">
              <img
                src={supportingimage5}
                style={{ width: "25vw", height: "30vw" }}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  posted_jobs: state.recruiterReducer.posted_jobs
});

export default connect(
  mapStateToProps,
  {
    getPostedJobs
  }
)(ViewPostedJobs);
