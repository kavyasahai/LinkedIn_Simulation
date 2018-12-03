import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./common/notFound";
import RecruiterDashboardCityWise from "./RecruiterDashboard/recruiterDashboardCityWise";
import RecruiterDashboardTop10 from "./RecruiterDashboard/recruiterDashboardTop10";
import RecruiterDashboardTop5 from "./RecruiterDashboard/recruiterDashboardTop5";
import RecruiterDashboardJobClicks from "./RecruiterDashboard/recruiterDashboardJobClicks";

import Login from "./Applicant/login";
import PostSignUp from "./Applicant/postSignUp";
import ApplicantDetails from "./Applicant/applicantDetails";
import UserSchoolData from "./Applicant/userSchoolData";
import UserProfilePhoto from "./Applicant/userProfilePhoto";
import ProfileViews from "./ProfileViews/ProfileViews";
import Recruiter from "./Recruiter/Recruiter";
import PostAJob from "./Recruiter/PostAJob";
import PostedJobs from "./Recruiter/postedJobs";
import EditJob from "./Recruiter/editJob";
import jobDetails from "./Job/jobDetails";
import jobSearch from "./Job/jobSearch.jsx";
import Homepage from "./Applicant/home";
import jobApply from "./Job/jobApply";
import network from "./Connections/Network";
import { Provider } from "react-redux";
import PrivateRoute from "./common/PrivateRoute";
import Messaging from "../components/Chat/messenger";
import ChatStore from "../chatstore";
import store from "../store";
import editJob from "./Recruiter/editJob";
import ConnectionRequests from "./Connections/ConnectionRequests";

//Create a Main Component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatstore: new ChatStore(this)
    };
  }

  render() {
    const { chatstore } = this.state;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              {/*Render Different Component based on Route*/}

              <Route path="/login" component={Login} />
              <Route path="/postsignup" component={PostSignUp} />
              <Route path="/applicantdetails" component={ApplicantDetails} />
              <Route path="/school" component={UserSchoolData} />
              <Route path="/profilepicture" component={UserProfilePhoto} />
              <PrivateRoute path="/network" component={network} />
              <PrivateRoute path="/myrequests" component={ConnectionRequests} />
              <PrivateRoute path="/job-apply" component={jobApply} />
              <Route
                path="/messaging"
                store={chatstore}
                render={props => <Messaging {...props} store={chatstore} />}
              />
              <PrivateRoute
                path="/recruiterdashboardcitywise"
                exact
                component={RecruiterDashboardCityWise}
              />
              <PrivateRoute
                path="/recruiterdashboardtop10"
                exact
                component={RecruiterDashboardTop10}
              />
              <PrivateRoute
                path="/recruiterdashboardtop5"
                exact
                component={RecruiterDashboardTop5}
              />
              <PrivateRoute path="/home" exact component={Homepage} />
              <PrivateRoute
                path="/recruiterdashboardjobclicks"
                exact
                component={RecruiterDashboardJobClicks}
              />

              <PrivateRoute
                path="/profileviews"
                exact
                component={ProfileViews}
              />
              <PrivateRoute path="/recruiter" component={Recruiter} />
              <PrivateRoute path="/recruiter/post-a-job" component={PostAJob} />
              <PrivateRoute
                path="/recruiter/posted-jobs"
                component={PostedJobs}
              />
              <PrivateRoute
                path="/recruiter/edit-job/:id"
                component={editJob}
              />
              <PrivateRoute path="/job-details" component={jobDetails} />
              <PrivateRoute path="/job-search" component={jobSearch} />

              <Route path="/not-found" exact component={NotFound} />
              <Route path="/" exact component={Login} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
//Export The Main Component
export default Main;
