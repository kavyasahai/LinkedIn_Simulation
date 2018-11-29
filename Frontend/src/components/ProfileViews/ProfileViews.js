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
    var week_start = new Date();
    week_start.setDate(week_start.getDate() - 7);
    console.log("WEEK START", week_start);

    var allviews = {};
    var total_views = this.props.data_profileviews.length;

    var profileviews = this.props.data_profileviews;

    profileviews = profileviews.filter(v => {
      return new Date(v.viewDate) >= week_start;
    });

    console.log("PV", profileviews);
    this.props.data_profileviews.forEach(eachview => {
      var date = new Date(eachview.viewDate);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      var datestring = monthNames[date.getMonth()] + " " + date.getDate();
      if (allviews[datestring]) allviews[datestring]++;
      else allviews[datestring] = 1;
    });

    // allviews.foreach(view => {
    //   console.log("DATE", view.viewDate);
    // });

    const data = [["Day", "views"]];
    const nums = [1, 2, 1, 3, 2];

    nums.map((num, idx) => {
      data.push([`Day${idx + 1}`, num]);
    });

    console.log("DS:", data);

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
              title: `${total_views} profile viewers in the past 30 days`
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

const mapStateToProps = state => ({
  data_profileviews: state.getProfileViewsReducer.data_profileviews
});

export default connect(
  mapStateToProps,
  { getProfileViews }
)(ProfileViews);
