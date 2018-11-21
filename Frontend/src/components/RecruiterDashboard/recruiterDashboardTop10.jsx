import React, { Component } from "react";
import { Redirect } from "react-router";
import "../../css/recruiterDashboard.css";
import Chart from "react-google-charts";

class RecruiterDashboardTop10 extends Component {
  handleFilter2 = () => {
    this.props.history.push("/recruiterdashboardcitywise");
  };
  handleFilter3 = () => {
    this.props.history.push("/recruiterdashboardtop5");
  };
  render() {
    const data = [
      [
        "Job",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      ["Job1", 1000, 400, 200, 1000, 400, 200, 1000, 400, 200, 1000, 400, 200],
      ["Job2", 1170, 460, 250, 1170, 460, 250, 1170, 460, 250, 1170, 460, 250],
      ["Job3", 660, 1120, 300, 660, 1120, 300, 660, 1120, 300, 660, 1120, 300],
      ["Job4", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350],
      ["Job5", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350],
      ["Job6", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350],
      ["Job7", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350],
      ["Job8", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350],
      ["Job9", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350],
      ["Job10", 1030, 540, 350, 1030, 540, 350, 1030, 540, 350, 1030, 540, 350]
    ];

    let redirectVar = null;
    const token = localStorage.getItem("username");
    if (!token && token === "Bearer undefined") {
      redirectVar = <Redirect to="/home" />;
    }

    return (
      <React.Fragment>
        {redirectVar}
        <div className="sidebar_dashboard">
          <a href="#">
            <span className="active_link">Top 10 job postings</span>
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter2}>
            City-wise applications for a job posting
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter3}>
            Top 5 job postings with least number of applications
          </a>
        </div>
        <div className="displayCharts">
          <Chart
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            width="75vw"
            height="25vw"
            options={{
              //   isStacked: true,
              title: "Applications/month for 10 Job postings",
              hAxis: { title: "Job", titleTextStyle: { color: "#333" } },
              vAxis: {
                title: "Number of Applications",
                titleTextStyle: { color: "#333" }
              }
              // legend: { position: "top", maxLines: 3 }
              //   chartArea: { width: "50%", height: "70%" }
            }}
            data={data}
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
                title: "Applications/month for 10 Job postings",
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
                title: "Applications/month for 10 Job postings",
                subtitle: "For the year 2018"
              }
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RecruiterDashboardTop10;
