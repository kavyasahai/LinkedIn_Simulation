import React, { Component } from "react";
import "../../css/homepage.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { getJWTUsername } from "../common/auth";

import Header from "../Header/head";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
// import { getMaxListeners } from 'cluster';

//Define a Login Component
class Homepage extends Component {
  //call the constructor method
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      userdata: []
    };
    //Bind the handlers to this class
  }
  //Call the Will Mount to set the auth Flag to false
  async componentDidMount() {
    var headers = new Headers();
    //prevent page from refresh
    // e.preventDefault();
    const username = this.props.location.state.username;
    const data = {
      username: username
    };
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    const res = await axios
      .post("http://localhost:3001/getuserdata", data)
      .then(response => {
        console.log("Updated List", response.data.updatedList);
        this.setState({
          userdata: response.data.updatedList
        });
      });
  }

  render() {
    console.log(this.state.userdata);
    if (this.state.userdata == null) {
      return (
        <React.Fragment>
          <Header />
          <p className="notfound">User profile does not exist.</p>
        </React.Fragment>
      );
    }

    let experiencedata =
      this.state.userdata.experience &&
      this.state.userdata.experience.map(userdetail => {
        return (
          <div>
            <p>{userdetail.title}</p>
            <p>{userdetail.company}</p>
            <p>{userdetail.location}</p>
            <p>{userdetail.from}</p>
            <p> </p>
            <p>{userdetail.to}</p>
            <p>{userdetail.desc}</p>
            <p>{userdetail.industry}</p>
          </div>
        );
      });
    let education =
      this.state.userdata.education &&
      this.state.userdata.education.map(userdetail => {
        return (
          <div>
            <p>{userdetail.school}</p>
            <p>{userdetail.degree}</p>
            <p>{userdetail.field}</p>
            <p>{userdetail.grade}</p>
            <p>{userdetail.fromyear}</p>
            <p>{userdetail.toyear}</p>
          </div>
        );
      });
    return (
      <div>
        <Header />
        <div class="pv-content profile-view-grid neptune-grid two-column ghost-animate-in ">
          <section
            id="ember1102"
            class="pv-ad-banner--light ad-banner-container is-header-zone ember-view"
          >
            <iframe
              class="ad-banner"
              width="100%"
              height="17"
              src="about:blank"
              scrolling="no"
              title="advertisement"
            />
          </section>
          <div style={{ height: "100%", width: "100%" }}>
            <div class="core-rail" role="main">
              <div
                id="ember1103"
                class="Elevation-2dp profile-background-image profile-background-image--loading ember-view"
              />

              <div id="ember1104" class="ember-view">
                <section
                  id="ember1105"
                  class="pv-profile-section pv-top-card-section artdeco-container-card ember-view"
                >
                  <div class="pv-top-card-section__profile-photo-container pv-top-card-v2-section__profile-photo-container">
                    <div class="pv-top-card-section__photo-wrapper pv-top-card-v2-section__photo-wrapper">
                      <div
                        id="ember1109"
                        class="pv-top-card-section__edit-photo pv-top-card-v2-section__edit-photo profile-photo-edit ember-view"
                      >
                        {" "}
                        <button
                          data-control-name="edit_profile_photo"
                          class="profile-photo-edit__edit-btn"
                          data-ember-action=""
                          data-ember-action-1110="1110"
                        >
                          {/* <img
                            src="https://media.licdn.com/dms/image/C5603AQHVVPM_Y5GT8w/profile-displayphoto-shrink_200_200/0?e=1548892800&amp;v=beta&amp;t=ft0HBIT7DODYrcap2naj-e5JB_NqcRwEBFO5eLAPZ0U"
                            class="profile-photo-edit__preview"
                            alt="Edit photo"
                            height="128"
                            width="128"
                          /> */}
                          <span class="profile-photo-edit__edit-icon svg-icon-wrap">
                            <li-icon
                              aria-hidden="true"
                              type="pencil-icon"
                              size="small"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                width="24px"
                                height="24px"
                                x="0"
                                y="0"
                                preserveAspectRatio="xMinYMin meet"
                                class="artdeco-icon"
                                focusable="false"
                              >
                                <path
                                  d="M14.71,4L12,1.29a1,1,0,0,0-1.41,0L3,8.85,1,15l6.15-2,7.55-7.55A1,1,0,0,0,15,4.71,1,1,0,0,0,14.71,4Zm-8.84,7.6-1.5-1.5L9.42,5.07l1.5,1.5Zm5.72-5.72-1.5-1.5,1.17-1.17,1.5,1.5Z"
                                  class="small-icon"
                                />
                              </svg>
                            </li-icon>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="pv-top-card-v2-section__meta-info display-flex">
                    <span
                      id="ember1111"
                      style={{ display: "none" }}
                      class="pv-member-badge--for-top-card-v2 pv-member-badge ember-view"
                    >
                      <span class="visually-hidden">
                        {this.state.userdata
                          ? this.state.userdata.firstname
                          : ""}{" "}
                        has a account
                      </span>
                    </span>

                    <a
                      data-control-name="edit_top_card"
                      href="/in/kesha-shah-2925b2135/edit/topcard/"
                      id="ember1113"
                      class="pv-top-card-section__edit button-tertiary-medium-round ember-view"
                    >
                      {" "}
                      <span class="svg-icon-wrap">
                        <span class="visually-hidden">Edit Profile</span>
                        <li-icon aria-hidden="true" type="pencil-icon">
                          <svg
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            x="0"
                            y="0"
                            preserveAspectRatio="xMinYMin meet"
                            class="artdeco-icon"
                            focusable="false"
                          >
                            <path
                              d="M21.71,5L19,2.29a1,1,0,0,0-1.41,0L4,15.85,2,22l6.15-2L21.71,6.45A1,1,0,0,0,22,5.71,1,1,0,0,0,21.71,5ZM6.87,18.64l-1.5-1.5L15.92,6.57l1.5,1.5ZM18.09,7.41l-1.5-1.5,1.67-1.67,1.5,1.5Z"
                              class="large-icon"
                              style={{ fill: "currentColor" }}
                            />
                          </svg>
                        </li-icon>
                      </span>
                    </a>
                  </div>

                  <div id="ember1115" class="mt4 display-flex ember-view">
                    <div class="pv-top-card-v2-section__info mr5">
                      <div>
                        <h1 class="pv-top-card-section__name inline t-24 t-black">
                          {this.state.userdata
                            ? this.state.userdata.firstname
                            : ""}{" "}
                          {this.state.userdata
                            ? this.state.userdata.lastname
                            : ""}
                        </h1>
                      </div>

                      <h2 class="pv-top-card-section__headline  t-33 t-black">
                        {this.state.userdata.education
                          ? this.state.userdata.education[0]
                            ? this.state.userdata.education[0].degree
                            : ""
                          : ""}{" "}
                        Student at{" "}
                        {this.state.userdata.education
                          ? this.state.userdata.education[0]
                            ? this.state.userdata.education[0].school
                            : ""
                          : ""}
                      </h2>

                      <h3 class="pv-top-card-section__location t-33 t-black--light  inline-block">
                        {this.state.userdata ? this.state.userdata.country : ""}
                      </h3>
                      <div class="profilesection">
                        <div class="pv-top-card-v2-section__actions mt4 display-flex">
                          <section
                            id="ember1116"
                            class="pe-hub-section mb2 ember-view"
                          >
                            <button class="dropbtn">Connect</button>
                          </section>

                          <span
                            id="ember1120"
                            class="pv-s-profile-actions__overflow ember-view"
                          >
                            <button
                              aria-label="More actions"
                              aria-expanded="false"
                              id="ember1187"
                              class="pv-s-profile-actions__overflow-toggle  button-secondary-large-muted mh1 ml2 artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view"
                            >
                              <span class="artdeco-button__text t-33">
                                More…
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="pv-top-card-v2-section__links">
                      <button
                        href="#education-section"
                        data-control-name="education_see_more"
                        class="pv-top-card-v2-section__link pv-top-card-v2-section__link-education mb1"
                        data-ember-action=""
                        data-ember-action-1122="1122"
                      >
                        <span
                          id="ember1124"
                          class="pv-top-card-v2-section__entity-name pv-top-card-v2-section__school-name text-align-left ml2 t-33 t-black t-bold lt-line-clamp lt-line-clamp--multi-line ember-view"
                          style={{ "-webkit-line-clamp": "2" }}
                        >
                          {" "}
                          {this.state.userdata.education
                            ? this.state.userdata.education[0]
                              ? this.state.userdata.education[0].school
                              : ""
                            : ""}
                        </span>
                      </button>

                      <a
                        data-control-name="contact_see_more"
                        href="/in/kesha-shah-2925b2135/detail/contact-info/"
                        id="ember1125"
                        class="pv-top-card-v2-section__link pv-top-card-v2-section__link--contact-info mb1 ember-view"
                      >
                        {" "}
                        <span class="svg-icon-wrap">
                          <span class="visually-hidden">See contact info</span>
                          <li-icon
                            aria-hidden="true"
                            type="address-book-icon"
                            class="pv-top-card-v2-section__icon mh1"
                            size="medium"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              x="0"
                              y="0"
                              preserveAspectRatio="xMinYMin meet"
                              focusable="false"
                            >
                              <path
                                d="M16,15H10a3.24,3.24,0,0,1,1.79-2.89L12,12h2l0.21,0.11A3.24,3.24,0,0,1,16,15ZM13,8h0a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2h0A2,2,0,0,0,13,8Zm8-4V20a2,2,0,0,1-2,2H5V19H3V17H5V13H3V11H5V7H3V5H5V2H19A2,2,0,0,1,21,4ZM19,4H7V20H19V4Z"
                                class="large-icon"
                                style={{ fill: "currentColor" }}
                              />
                            </svg>
                          </li-icon>
                        </span>
                        <span class="pv-top-card-v2-section__entity-name pv-top-card-v2-section__contact-info ml2 t-33 t-black t-bold">
                          See contact info
                        </span>
                      </a>
                      <a
                        data-control-name="topcard_view_all_connections"
                        href="/search/results/people/?facetNetwork=%5B%22F%22%5D&amp;origin=MEMBER_PROFILE_CANNED_SEARCH"
                        id="ember1126"
                        class="pv-top-card-v2-section__link pv-top-card-v2-section__link--connections ember-view"
                      >
                        {" "}
                        <span class="svg-icon-wrap">
                          <span class="visually-hidden">See connections</span>
                          <li-icon
                            aria-hidden="true"
                            type="people-icon"
                            class="pv-top-card-v2-section__icon mh1"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="24px"
                              height="24px"
                              x="0"
                              y="0"
                              preserveAspectRatio="xMinYMin meet"
                              class="artdeco-icon"
                              focusable="false"
                            >
                              <path
                                d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z"
                                class="large-icon"
                                style={{ fill: "currentColor" }}
                              />
                            </svg>
                          </li-icon>
                        </span>
                        <span class="pv-top-card-v2-section__entity-name pv-top-card-v2-section__connections ml2 t-33 t-black t-bold">
                          See connections
                        </span>
                      </a>
                    </div>
                  </div>

                  <div
                    id="ember1128"
                    class="pv-top-card-section__summary ember-view"
                  >
                    <div
                      id="ember1129"
                      class="pv-top-card-section__summary-treasury mt4 pv-treasury-list-preview ember-view"
                    />
                  </div>
                </section>
              </div>

              <div class="summary">
                <div class="summarybox">
                  <section class="pv-profile-section pv-top-card-section artdeco-container-card ember-view">
                    <h3>Summary</h3>
                    <div>
                      {this.state.userdata
                        ? this.state.userdata.profileSummary
                        : ""}
                    </div>
                  </section>
                  <section class="pv-profile-section pv-top-card-section artdeco-container-card ember-view">
                    <h3>Skills</h3>
                    <div>
                      {this.state.userdata ? this.state.userdata.skills : ""}
                    </div>
                  </section>
                  <section class="pv-profile-section pv-top-card-section artdeco-container-card ember-view">
                    <h3>Experience</h3>
                    <div>{experiencedata}</div>
                  </section>
                  <section class="pv-profile-section pv-top-card-section artdeco-container-card ember-view">
                    <h3>Education</h3>
                    <div>{education}</div>
                  </section>
                </div>
              </div>
            </div>
            <div class="sidebarad">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="box" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    username: state.username,
    summaryinserted: state.summaryinserted,
    userdata: state.userdata
  };
};
export default Homepage;
// export default connect(mapStateToProps,{summaryinsert,experienceinsert,schoolinsert,skillsinsert})(Homepage);
