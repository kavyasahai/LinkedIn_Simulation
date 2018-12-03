import React, { Component } from "react";
import "../../css/recruiterDashboard.css";
import Chart from "react-google-charts";
import { connect } from "react-redux";
import { getRecruiterSavedJobs } from "../../actions/recruiterDashboardActions";
import Header from "../Header/head";
import { getJWTUsername } from "../common/auth";

class recruiterDashboardJobSaves extends Component {
  componentDidMount() {
    var username = getJWTUsername();
    this.props.getRecruiterSavedJobs(username);
  }
  handleFilter1 = () => {
    this.props.history.push("/recruiterdashboardtop10");
  };
  handleFilter2 = () => {
    this.props.history.push("/recruiterdashboardcitywise");
  };
  handleFilter3 = () => {
    this.props.history.push("/recruiterdashboardtop5");
  };
  handleFilter4 = () => {
    this.props.history.push("/recruiterdashboardjobclicks");
  };
  handleFilter5 = () => {
    this.props.history.push("/recruiterdashboardjobsaves");
  };
  handleFilter6 = () => {
    this.props.history.push("/recruiterdashboardtrace");
  };

  render() {
    console.log("PROPS: ", this.props.data_jobclicks);

    const data = [["Job Posting", "Clicks"]];

    this.props.data_jobclicks &&
      this.props.data_jobclicks.forEach(job => {
        data.push([job.title + " at " + job.company, parseInt(job.clicks)]);
      });

    console.log("DATA", data);

    return (
      <React.Fragment>
        <Header />
        <div className="sidebar_dashboard">
          <a href="#" onClick={this.handleFilter1}>
            Top 10 job postings
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter2}>
            City-wise applications for a job posting
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter3}>
            Top 5 job postings with least number of applications
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter4}>
            Number of clicks per job posting
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter5}>
            Number of Saved Jobs
          </a>
          <br /> <br /> <br />
          <a href="#">
            <span className="active_link">Trace Job</span>
          </a>
        </div>
        <div className="displayCharts">
          <Chart
            height="30vw"
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              title: "Clicks per Job Posting",
              chartArea: { width: "50%" },
              hAxis: {
                title: "Number of Clicks",
                minValue: 0
              },
              vAxis: {
                title: "Job Posting"
              }
            }}
            // For tests
            rootProps={{ "data-testid": "1" }}
          />
          <br />
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data_jobsaves: state.recruiterDashboard.data_jobsaves
});

export default connect(
  mapStateToProps,
  { getRecruiterSavedJobs }
)(recruiterDashboardJobSaves);
