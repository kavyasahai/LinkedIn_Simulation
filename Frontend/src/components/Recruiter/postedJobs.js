import React from "react";
import { connect } from "react-redux";
import { getPostedJobs } from "../../actions/recruiterActions";

class PostedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPostedJobs();
    this.state = {
      posted_jobs: []
    };
  }
  render() {
    let posted_jobs;
    if (this.props.posted_jobs.length > 0) {
      posted_jobs = this.props.posted_jobs.map(job => {
        return (
          <div>
            <p>Job Title: { job.title }</p>
            <p>Description: { job.description }</p>
            <p>Industry: { job.industry }</p>
            <p>Viewed: { job.viewsCount }</p>
            <p>Company: { job.company }</p>
            <p>Job ID: { job.jobId } </p>
            <hr />
          </div>
        );
      });
    } else {
      posted_jobs = "No job posted";
    }
    return (
      <div>
        <h3>Posted Jobs</h3>
        { posted_jobs }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posted_jobs: state.recruiterReducer.posted_jobs
});

export default connect(
  mapStateToProps,
  { getPostedJobs }
)(PostedJobs);
