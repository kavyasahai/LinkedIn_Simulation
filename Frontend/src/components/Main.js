import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./LandingPage/Home";
import NotFound from "./common/notFound";
import RecruiterDashboardCityWise from "./RecruiterDashboard/recruiterDashboardCityWise";
import RecruiterDashboardTop10 from "./RecruiterDashboard/recruiterDashboardTop10";
import RecruiterDashboardTop5 from "./RecruiterDashboard/recruiterDashboardTop5";
import Login from "./Applicant/login";
import PostSignUp from "./Applicant/postSignUp";
import ApplicantDetails from "./Applicant/applicantDetails";
import UserSchoolData from "./Applicant/userSchoolData";
import UserProfilePhoto from "./Applicant/userProfilePhoto";

import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import { Provider } from "react-redux";

//middleware settings
// To resolve promise to store we use apply
// const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStore(rootReducer, composePlugin(applyMiddleware(promise)));
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
              <Route path="/not-found" exact component={NotFound} />
              <Route path="/" exact component={Home} />
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
