import React, { Component } from "react";
import "../../css/recruiterDashboard.css";
import Chart from "react-google-charts";
import { connect } from "react-redux";
import { getProfileViews } from "../../actions/getProfileViewsAction";

class ProfileViews extends Component {
  componentDidMount() {
    this.props.getProfileViews();
  }
  render() {
    console.log("props=", this.props.username);
    const data = [["Day", "views"]];
    const nums = [1, 2, 1, 3, 2];

    nums.map((num, idx) => {
      data.push([`Day${idx + 1}`, num]);
    });

    console.log("DS:", data);

    var no_views = "10";
    return (
      <React.Fragment>
        <div className="displayViews">
          <Chart
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            width="75vw"
            height="25vw"
            options={{
              //   isStacked: true,
              title: `${no_views} profile viewers in the past 30 days`
            }}
            data={data}
          />
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   data_profileviews: state.getProfileViewsReducer.data_profileviews
// });

export default connect(
  null,
  { getProfileViews }
)(ProfileViews);
