import React, { Component } from "react";
import "../../css/recruiterDashboard.css";
import Chart from "react-google-charts";
import Header from "../Header/header";

class RecruiterDashboardTop5 extends Component {
  handleFilter2 = () => {
    this.props.history.push("/recruiterdashboardcitywise");
  };
  handleFilter1 = () => {
    this.props.history.push("/recruiterdashboardtop10");
  };
  render() {
    const data = [
      ["Job", "Number of Applications"],
      ["Job1", 50],
      ["Job2", 13],
      ["Job3", 30],
      ["Job4", 18],
      ["Job5", 25]
    ];

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
          <a href="#">
            <span className="active_link">
              Top 5 job postings with least number of applications
            </span>
          </a>
        </div>
        <div className="displayCharts">
          <Chart
            width={"75vw"}
            height={"30vw"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              title: "Top 5 Jobs with least number of Applications",
              is3D: true
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <Chart
            chartType="Bar"
            width="75vw"
            height="30vw"
            data={data}
            loader={<div>Loading Chart</div>}
            options={{
              chart: {
                title: "Top 5 Jobs with least number of Applications",
                subtitle: "For the year 2018"
              }
            }}
          />
          <br />
          <br />
          <br />
          <br />
          <Chart
            chartType="Line"
            width="75vw"
            height="30vw"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
              chart: {
                title: "Top 5 Jobs with least number of Applications",
                subtitle: "For the year 2018"
              }
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RecruiterDashboardTop5;
