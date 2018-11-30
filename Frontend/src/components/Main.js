import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./LandingPage/home";
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
import ProfileViews from "./ProfileViews/profileViews";
import Recruiter from "./Recruiter/recruiter";
import PostAJob from "./Recruiter/postAJob";
import jobDetails from "./Job/jobDetails";
import jobFilter from "./Job/jobFilter";
import jobSearch from "./Job/jobSearch.jsx";
import Homepage from "./Applicant/homePage";

import { Provider } from "react-redux";
import PrivateRoute from "./common/privateRoute";

import store from "../store";

//Create a Main Component
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              {/*Render Different Component based on Route*/}
              <Route path="/home" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/postsignup" component={PostSignUp} />
              <Route path="/applicantdetails" component={ApplicantDetails} />
              <Route path="/school" component={UserSchoolData} />
              <Route path="/profilepicture" component={UserProfilePhoto} />
              <Route
                path="/recruiterdashboardcitywise"
                exact
                component={RecruiterDashboardCityWise}
              />
              <Route
                path="/recruiterdashboardtop10"
                exact
                component={RecruiterDashboardTop10}
              />
              <Route
                path="/recruiterdashboardtop5"
                exact
                component={RecruiterDashboardTop5}
              />
              <Route path="/homepage" exact component={Homepage} />
              <Route
                path="/recruiterdashboardjobclicks"
                exact
                component={RecruiterDashboardJobClicks}
              />

              <Route path="/profileviews" exact component={ProfileViews} />
              <PrivateRoute path="/recruiter" component={Recruiter} />
              <Route path="/recruiter/post-a-job" component={PostAJob} />
              <Route path="/job-details" component={jobDetails} />
              <Route path="/job-filter" component={jobFilter} />
              <Route path="/job-search" component={jobSearch} />

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
