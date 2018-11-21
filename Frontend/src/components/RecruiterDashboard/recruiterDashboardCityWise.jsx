import React, { Component } from "react";
import Chart from "react-google-charts";
import "../../css/recruiterDashboard.css";

class RecruiterDashboardCityWise extends Component {
  handleFilter1 = () => {
    this.props.history.push("/recruiterdashboardtop10");
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
    return (
      <React.Fragment>
        <div className="sidebar_dashboard">
          <a href="#" onClick={this.handleFilter1}>
            Top 10 job postings
          </a>
          <br /> <br /> <br />
          <a href="#">
            <span className="active_link">
              City-wise applications for a job posting
            </span>
          </a>
          <br /> <br /> <br />
          <a href="#" onClick={this.handleFilter3}>
            Top 5 job postings with least number of applications
          </a>
        </div>
        <div className="displayCharts">
          {" "}
          <Chart
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            width="75vw"
            height="30vw"
            options={{
              //   isStacked: true,
              title: "City wise Applications/month for a job",
              hAxis: { title: "City", titleTextStyle: { color: "#333" } },
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
                title: "City wise Applications/month for a job",
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
                title: "City wise Applications/month for a job",
                subtitle: "For the year 2018"
              }
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RecruiterDashboardCityWise;
