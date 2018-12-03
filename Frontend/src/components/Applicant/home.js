import React, { Component } from "react";
import "../../css/homepage.css";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { getJWTUsername } from "../common/auth";

import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
import Header from "../Header/head";

//Define a Login Component
class Homepage extends Component {
  //call the constructor method
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      firstname: "",
      lastname: "",
      headline: "",
      country: "",
      zipcode: "",
      location: "",
      industry: "",
      summary: "",
      summaryinserted: true
    };
    //Bind the handlers to this class
    this.firstnameChangeHandler = this.firstnameChangeHandler.bind(this);
    this.lastnameChangeHandler = this.lastnameChangeHandler.bind(this);
    this.headlineChangeHandler = this.headlineChangeHandler.bind(this);
    this.countryChangeHandler = this.countryChangeHandler.bind(this);
    this.zipcodeChangeHandler = this.zipcodeChangeHandler.bind(this);
    this.locationChangeHandler = this.locationChangeHandler.bind(this);
    this.summaryChangeHandler = this.summaryChangeHandler.bind(this);
    this.industryChangeHandler = this.industryChangeHandler.bind(this);
    this.submitSummary = this.submitSummary.bind(this);
  }
  //Call the Will Mount to set the auth Flag to false
  componentWillMount() {}

  firstnameChangeHandler = e => {
    this.setState({
      firstname: e.target.value
    });
  };

  lastnameChangeHandler = e => {
    this.setState({
      lastname: e.target.value
    });
  };

  headlineChangeHandler = e => {
    this.setState({
      headline: e.target.value
    });
  };
  // //password change handler to update state variable with the text entered by the user
  countryChangeHandler = e => {
    this.setState({
      country: e.target.value
    });
  };
  zipcodeChangeHandler = e => {
    this.setState({
      zipcode: e.target.value
    });
  };
  locationChangeHandler = e => {
    this.setState({
      location: e.target.value
    });
  };
  summaryChangeHandler = e => {
    this.setState({
      summary: e.target.value
    });
  };
  industryChangeHandler = e => {
    this.setState({
      industry: e.target.value
    });
  };
  // // //submit Login handler to send a request to the node backend
  submitSummary = e => {
    var headers = new Headers();
    //prevent page from refresh
    e.preventDefault();
    const username = getJWTUsername();
    const data = {
      username: username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      headline: this.state.headline,
      country: this.state.country,
      zipcode: this.state.zipcode,
      location: this.state.location,
      summary: this.state.summary,
      industry: this.state.industry
    };
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    this.props.onSummaryHandle(data);
  };
  render() {
    // let redirect = null;
    // if(this.props.authFlag){
    //     redirect = <Redirect to= "/homepage"/>
    // }
    //redirect based on successful login
    // let redirectVar = null;
    // if(cookie.load('cookie')){
    //     redirectVar = <Redirect to= "/home"/>
    // }
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

          <div class="core-rail " role="main">
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
                        <img
                          src="https://media.licdn.com/dms/image/C5603AQHVVPM_Y5GT8w/profile-displayphoto-shrink_200_200/0?e=1548892800&amp;v=beta&amp;t=ft0HBIT7DODYrcap2naj-e5JB_NqcRwEBFO5eLAPZ0U"
                          class="profile-photo-edit__preview"
                          alt="Edit photo"
                          height="128"
                          width="128"
                        />
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
                    <span class="visually-hidden">Kesha has a account</span>
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
                        Kesha Shah
                      </h1>
                    </div>

                    <h2 class="pv-top-card-section__headline  t-33 t-black">
                      Grad Student at San Jose State University
                    </h2>

                    <h3 class="pv-top-card-section__location t-33 t-black--light  inline-block">
                      United States
                    </h3>
                    <div class="profilesection">
                      <div class="pv-top-card-v2-section__actions mt4 display-flex">
                        <section
                          id="ember1116"
                          class="pe-hub-section mb2 ember-view"
                        >
                          <div class="dropdown">
                            <button class="dropbtn">Add Profile Section</button>
                            <div class="dropdown-content">
                              <a data-toggle="modal" href="#summary">
                                Summary
                              </a>
                              <a data-toggle="modal" href="#experience">
                                Work Experience
                              </a>
                              <a data-toggle="modal" href="#education">
                                Education
                              </a>
                              <a data-toggle="modal" href="#skills">
                                Skills
                              </a>
                              <a data-toggle="modal" href="#resume">
                                Resume
                              </a>
                            </div>
                          </div>
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
                            <span class="artdeco-button__text t-33">More…</span>
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
                        San Jose State University
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
                        See connections (152)
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
          </div>
          <div class="pv-content__right-rail right-rail">
            <div id="ember8838" class="pv-profile-info-section mb4 ember-view">
              <div
                id="ember8839"
                class="pv-view-public-profile-section pv-profile-info-section-button relative ember-view"
              >
                <a
                  target="_blank"
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  id="ember8840"
                  class="pv-view-public-profile-section__button pv-profile-info-section-button__button ember-view"
                >
                  {" "}
                  <span class="t-33 t-black--light t-bold">
                    Edit public profile &amp; URL
                  </span>
                </a>
                <li-icon
                  aria-hidden="true"
                  type="question-pebble-icon"
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
                      d="M7,10h2v2H7V10zM15,8c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-3.9,3.1-7,7-7S15,4.1,15,8zM13.2,8c0-2.9-2.3-5.2-5.2-5.2S2.8,5.1,2.8,8c0,2.9,2.3,5.2,5.2,5.2S13.2,10.9,13.2,8zM8.5,4h-1C6.1,4,5,5.1,5,6.5V7h1.9V5.9h2.3v1.3H8c-0.6,0-1,0.4-1,1V9h1.5C9.9,9,11,7.9,11,6.5C11,5.1,9.9,4,8.5,4z"
                      class="small-icon"
                    />
                  </svg>
                </li-icon>
              </div>

              <hr class="divider mt4 mb4" />
              <div
                id="ember8842"
                class="mt2 pv-add-secondary-language-section pv-profile-info-section-button relative ember-view"
              >
                <a
                  data-control-name="add_secondary_language"
                  href="/in/kesha-shah-2925b2135/edit/secondary-language/"
                  id="ember8843"
                  class="pv-add-secondary-language-section__button pv-profile-info-section-button__button ember-view"
                >
                  {" "}
                  <span class="t-33 t-black--light t-bold">
                    Add profile in another language
                  </span>
                </a>
                <li-icon
                  aria-hidden="true"
                  type="question-pebble-icon"
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
                      d="M7,10h2v2H7V10zM15,8c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-3.9,3.1-7,7-7S15,4.1,15,8zM13.2,8c0-2.9-2.3-5.2-5.2-5.2S2.8,5.1,2.8,8c0,2.9,2.3,5.2,5.2,5.2S13.2,10.9,13.2,8zM8.5,4h-1C6.1,4,5,5.1,5,6.5V7h1.9V5.9h2.3v1.3H8c-0.6,0-1,0.4-1,1V9h1.5C9.9,9,11,7.9,11,6.5C11,5.1,9.9,4,8.5,4z"
                      class="small-icon"
                    />
                  </svg>
                </li-icon>
                <div
                  id="ember8844"
                  class="pv-add-secondary-language-section__button-icon pv-profile-info-section-button__button-icon ember-view"
                >
                  <div class="hovercard-container" />
                </div>
              </div>
            </div>
          </div>

          <div class="sidebarad">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div class="box" />
            </div>
          </div>

          <div class="profilestrength">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div class="box" />
            </div>
          </div>
        </div>

        <div
          id="summary"
          class="modal fade"
          role="dialog"
          show="this.state.summaryinserted"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Edit Intro</h4>
              </div>
              <div class="modal-body">
                <div id="ember3308" class="carousel-body ember-view">
                  <div
                    id="ember3309"
                    class="carousel-item focused-easeInOut-motion carousel-item--show ember-view"
                  >
                    {" "}
                    <div id="ember3310" class="form-edit ember-view">
                      {" "}
                      <form
                        class="pe-form  pe-top-card-form"
                        data-ember-action=""
                        data-ember-action-3312="3312"
                      >
                        <div class="pe-s-form__container">
                          <div class="pe-s-form__body pe-form-body pe-form-body--align-top">
                            <div class="pe-top-card-form__background-image-container relative">
                              <div
                                id="ember3316"
                                class="profile-background-image--no-rounded-corners profile-background-image profile-background-image--loading ember-view"
                              />
                            </div>

                            <div class="pe-form-body__content">
                              <div class="pe-form-body_top-area relative display-flex" />

                              <div class="pe-form-field pe-top-card-form__photo-field pe-top-card-form__photo-field--floating pe-top-card-form__photo-wrapper pe-top-card-v2-form__photo-wrapper EntityPhoto-circle-8">
                                <div
                                  id="ember3318"
                                  class="pe-top-card-form__photo profile-photo-edit--large-preview profile-photo-edit ember-view"
                                >
                                  {" "}
                                  <button
                                    data-control-name="edit_profile_photo"
                                    class="profile-photo-edit__edit-btn"
                                    data-ember-action=""
                                    data-ember-action-3319="3319"
                                  >
                                    <img
                                      src="https://media.licdn.com/dms/image/C5603AQHVVPM_Y5GT8w/profile-displayphoto-shrink_200_200/0?e=1548892800&amp;v=beta&amp;t=ft0HBIT7DODYrcap2naj-e5JB_NqcRwEBFO5eLAPZ0U"
                                      class="profile-photo-edit__preview"
                                      alt="Edit photo"
                                      height="152"
                                      width="152"
                                    />
                                    <span class="profile-photo-edit__edit-icon profile-photo-edit__edit-icon--for-top-card-v2 svg-icon-wrap">
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

                              <div class="pe-s-multi-field">
                                <div class="pe-top-card-form__name-field">
                                  <div
                                    class="pe-s-multi-field__item pe-form-field pe-top-card-form__first-name-field floating-label  "
                                    data-form-elem-focus="true"
                                  >
                                    <label
                                      for="topcard-firstname"
                                      class="pe-form-field__label label-text required"
                                    >
                                      First Name
                                    </label>

                                    <input
                                      name="firstName"
                                      maxlength="20"
                                      id="topcard-firstname"
                                      class="ember-text-field pe-form-field__text-input ember-view"
                                      type="text"
                                      onChange={this.firstnameChangeHandler}
                                    />
                                  </div>
                                </div>
                                <div class="pe-top-card-form__name-field">
                                  <div
                                    class="pe-s-multi-field__item pe-form-field pe-top-card-form__last-name-field floating-label  "
                                    data-form-elem-focus="true"
                                  >
                                    <label
                                      for="topcard-lastname"
                                      class="pe-form-field__label label-text required"
                                    >
                                      Last Name
                                    </label>

                                    <input
                                      name="lastName"
                                      maxlength="40"
                                      id="topcard-lastname"
                                      class="ember-text-field pe-form-field__text-input ember-view"
                                      type="text"
                                      onChange={this.lastnameChangeHandler}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div
                                class="pe-form-field pe-top-card-form__headline-field floating-label  "
                                data-form-elem-focus="true"
                              >
                                <label
                                  for="topcard-headline"
                                  class="pe-form-field__label label-text required"
                                >
                                  Headline
                                </label>

                                <textarea
                                  name="headline"
                                  id="topcard-headline"
                                  class="pe-top-card-form__headline-text ember-text-area pe-form-field__textarea ember-view"
                                  onChange={this.headlineChangeHandler}
                                />
                              </div>
                              <div
                                id="ember3332"
                                class="pe-form-field pe-top-card-form__location-picker ember-view"
                              >
                                <div class="pe-s-multi-field">
                                  <div class="pe-s-multi-field__item pe-form-field ">
                                    <label
                                      class="pe-form-field__label required"
                                      for="location-country"
                                    >
                                      Country/Region
                                    </label>

                                    <div
                                      id="ember3333"
                                      class="pe-secondary-locale-tooltip-trigger ember-view"
                                    >
                                      {" "}
                                      <select
                                        data-control-name="location_country_chooser"
                                        name="locationCountry"
                                        id="location-country"
                                        class="ember-view"
                                        onChange={this.countryChangeHandler}
                                      >
                                        <option value="us">
                                          United States
                                        </option>
                                        <option value="af">Afghanistan</option>
                                        <option value="ax">
                                          Aland Islands
                                        </option>
                                        <option value="al">Albania</option>
                                        <option value="dz">Algeria</option>
                                        <option value="as">
                                          American Samoa
                                        </option>
                                        <option value="ad">Andorra</option>
                                        <option value="ao">Angola</option>
                                        <option value="ai">Anguilla</option>
                                        <option value="aq">Antarctica</option>
                                        <option value="ag">
                                          Antigua and Barbuda
                                        </option>
                                        <option value="ar">Argentina</option>
                                        <option value="am">Armenia</option>
                                        <option value="aw">Aruba</option>
                                        <option value="au">Australia</option>
                                        <option value="at">Austria</option>
                                        <option value="az">Azerbaijan</option>
                                        <option value="bs">Bahamas</option>
                                        <option value="bh">Bahrain</option>
                                        <option value="bd">Bangladesh</option>
                                        <option value="bb">Barbados</option>
                                        <option value="by">Belarus</option>
                                        <option value="be">Belgium</option>
                                        <option value="bz">Belize</option>
                                        <option value="bj">Benin</option>
                                        <option value="bm">Bermuda</option>
                                        <option value="bt">Bhutan</option>
                                        <option value="bo">Bolivia</option>
                                        <option value="ba">
                                          Bosnia and Herzegovina
                                        </option>
                                        <option value="bw">Botswana</option>
                                        <option value="bv">
                                          Bouvet Island
                                        </option>
                                        <option value="br">Brazil</option>
                                        <option value="io">
                                          British Indian Ocean Territory
                                        </option>
                                        <option value="bn">
                                          Brunei Darussalam
                                        </option>
                                        <option value="bg">Bulgaria</option>
                                        <option value="bf">Burkina Faso</option>
                                        <option value="bi">Burundi</option>
                                        <option value="kh">Cambodia</option>
                                        <option value="cm">Cameroon</option>
                                        <option value="ca">Canada</option>
                                        <option value="cv">Cape Verde</option>
                                        <option value="cb">
                                          Caribbean Nations
                                        </option>
                                        <option value="ky">
                                          Cayman Islands
                                        </option>
                                        <option value="cf">
                                          Central African Republic
                                        </option>
                                        <option value="td">Chad</option>
                                        <option value="cl">Chile</option>
                                        <option value="cn">China</option>
                                        <option value="cx">
                                          Christmas Island
                                        </option>
                                        <option value="cc">
                                          Cocos (Keeling) Islands
                                        </option>
                                        <option value="co">Colombia</option>
                                        <option value="km">Comoros</option>
                                        <option value="cg">Congo</option>
                                        <option value="ck">Cook Islands</option>
                                        <option value="cr">Costa Rica</option>
                                        <option value="ci">
                                          Cote D’Ivoire (Ivory Coast)
                                        </option>
                                        <option value="hr">Croatia</option>
                                        <option value="cu">Cuba</option>
                                        <option value="cy">Cyprus</option>
                                        <option value="cz">
                                          Czech Republic
                                        </option>
                                        <option value="cd">
                                          Democratic Republic of the Congo
                                        </option>
                                        <option value="dk">Denmark</option>
                                        <option value="dj">Djibouti</option>
                                        <option value="dm">Dominica</option>
                                        <option value="do">
                                          Dominican Republic
                                        </option>
                                        <option value="ec">Ecuador</option>
                                        <option value="eg">Egypt</option>
                                        <option value="sv">El Salvador</option>
                                        <option value="gq">
                                          Equatorial Guinea
                                        </option>
                                        <option value="er">Eritrea</option>
                                        <option value="ee">Estonia</option>
                                        <option value="et">Ethiopia</option>
                                        <option value="fk">
                                          Falkland Islands (Malvinas)
                                        </option>
                                        <option value="fo">
                                          Faroe Islands
                                        </option>
                                        <option value="fm">
                                          Federated States of Micronesia
                                        </option>
                                        <option value="fj">Fiji</option>
                                        <option value="fi">Finland</option>
                                        <option value="fr">France</option>
                                        <option value="gf">
                                          French Guiana
                                        </option>
                                        <option value="pf">
                                          French Polynesia
                                        </option>
                                        <option value="tf">
                                          French Southern Territories
                                        </option>
                                        <option value="ga">Gabon</option>
                                        <option value="gm">Gambia</option>
                                        <option value="ge">Georgia</option>
                                        <option value="de">Germany</option>
                                        <option value="gh">Ghana</option>
                                        <option value="gi">Gibraltar</option>
                                        <option value="gr">Greece</option>
                                        <option value="gl">Greenland</option>
                                        <option value="gd">Grenada</option>
                                        <option value="gp">Guadeloupe</option>
                                        <option value="gu">Guam</option>
                                        <option value="gt">Guatemala</option>
                                        <option value="gg">Guernsey</option>
                                        <option value="gn">Guinea</option>
                                        <option value="gw">
                                          Guinea-Bissau
                                        </option>
                                        <option value="gy">Guyana</option>
                                        <option value="ht">Haiti</option>
                                        <option value="hm">
                                          Heard Island and McDonald Islands
                                        </option>
                                        <option value="hn">Honduras</option>
                                        <option value="hk">Hong Kong</option>
                                        <option value="hu">Hungary</option>
                                        <option value="is">Iceland</option>
                                        <option value="in">India</option>
                                        <option value="id">Indonesia</option>
                                        <option value="ir">Iran</option>
                                        <option value="iq">Iraq</option>
                                        <option value="ie">Ireland</option>
                                        <option value="im">Isle of Man</option>
                                        <option value="il">Israel</option>
                                        <option value="it">Italy</option>
                                        <option value="jm">Jamaica</option>
                                        <option value="jp">Japan</option>
                                        <option value="je">Jersey</option>
                                        <option value="jo">Jordan</option>
                                        <option value="kz">Kazakhstan</option>
                                        <option value="ke">Kenya</option>
                                        <option value="ki">Kiribati</option>
                                        <option value="kr">Korea</option>
                                        <option value="kp">
                                          Korea (North)
                                        </option>
                                        <option value="ko">Kosovo</option>
                                        <option value="kw">Kuwait</option>
                                        <option value="kg">Kyrgyzstan</option>
                                        <option value="la">Laos</option>
                                        <option value="lv">Latvia</option>
                                        <option value="lb">Lebanon</option>
                                        <option value="ls">Lesotho</option>
                                        <option value="lr">Liberia</option>
                                        <option value="ly">Libya</option>
                                        <option value="li">
                                          Liechtenstein
                                        </option>
                                        <option value="lt">Lithuania</option>
                                        <option value="lu">Luxembourg</option>
                                        <option value="mo">Macao</option>
                                        <option value="mk">Macedonia</option>
                                        <option value="mg">Madagascar</option>
                                        <option value="mw">Malawi</option>
                                        <option value="my">Malaysia</option>
                                        <option value="mv">Maldives</option>
                                        <option value="ml">Mali</option>
                                        <option value="mt">Malta</option>
                                        <option value="mh">
                                          Marshall Islands
                                        </option>
                                        <option value="mq">Martinique</option>
                                        <option value="mr">Mauritania</option>
                                        <option value="mu">Mauritius</option>
                                        <option value="yt">Mayotte</option>
                                        <option value="mx">Mexico</option>
                                        <option value="md">Moldova</option>
                                        <option value="mc">Monaco</option>
                                        <option value="mn">Mongolia</option>
                                        <option value="me">Montenegro</option>
                                        <option value="ms">Montserrat</option>
                                        <option value="ma">Morocco</option>
                                        <option value="mz">Mozambique</option>
                                        <option value="mm">Myanmar</option>
                                        <option value="na">Namibia</option>
                                        <option value="nr">Nauru</option>
                                        <option value="np">Nepal</option>
                                        <option value="nl">Netherlands</option>
                                        <option value="an">
                                          Netherlands Antilles
                                        </option>
                                        <option value="nc">
                                          New Caledonia
                                        </option>
                                        <option value="nz">New Zealand</option>
                                        <option value="ni">Nicaragua</option>
                                        <option value="ne">Niger</option>
                                        <option value="ng">Nigeria</option>
                                        <option value="nu">Niue</option>
                                        <option value="nf">
                                          Norfolk Island
                                        </option>
                                        <option value="mp">
                                          Northern Mariana Islands
                                        </option>
                                        <option value="no">Norway</option>
                                        <option value="pk">Pakistan</option>
                                        <option value="pw">Palau</option>
                                        <option value="ps">
                                          Palestinian Territory
                                        </option>
                                        <option value="pa">Panama</option>
                                        <option value="pg">
                                          Papua New Guinea
                                        </option>
                                        <option value="py">Paraguay</option>
                                        <option value="pe">Peru</option>
                                        <option value="ph">Philippines</option>
                                        <option value="pn">Pitcairn</option>
                                        <option value="pl">Poland</option>
                                        <option value="pt">Portugal</option>
                                        <option value="pr">Puerto Rico</option>
                                        <option value="qa">Qatar</option>
                                        <option value="re">Reunion</option>
                                        <option value="ro">Romania</option>
                                        <option value="ru">
                                          Russian Federation
                                        </option>
                                        <option value="rw">Rwanda</option>
                                        <option value="gs">
                                          S. Georgia and S. Sandwich Islands
                                        </option>
                                        <option value="sh">Saint Helena</option>
                                        <option value="kn">
                                          Saint Kitts and Nevis
                                        </option>
                                        <option value="lc">Saint Lucia</option>
                                        <option value="pm">
                                          Saint Pierre and Miquelon
                                        </option>
                                        <option value="vc">
                                          Saint Vincent and the Grenadines
                                        </option>
                                        <option value="ws">Samoa</option>
                                        <option value="sm">San Marino</option>
                                        <option value="st">
                                          Sao Tome and Principe
                                        </option>
                                        <option value="sa">Saudi Arabia</option>
                                        <option value="sn">Senegal</option>
                                        <option value="rs">Serbia</option>
                                        <option value="cs">
                                          Serbia and Montenegro
                                        </option>
                                        <option value="sc">Seychelles</option>
                                        <option value="sl">Sierra Leone</option>
                                        <option value="sg">Singapore</option>
                                        <option value="sk">
                                          Slovak Republic
                                        </option>
                                        <option value="si">Slovenia</option>
                                        <option value="sb">
                                          Solomon Islands
                                        </option>
                                        <option value="so">Somalia</option>
                                        <option value="za">South Africa</option>
                                        <option value="ss">South Sudan</option>
                                        <option value="es">Spain</option>
                                        <option value="lk">Sri Lanka</option>
                                        <option value="sd">Sudan</option>
                                        <option value="om">
                                          Sultanate of Oman
                                        </option>
                                        <option value="sr">Suriname</option>
                                        <option value="sj">
                                          Svalbard and Jan Mayen
                                        </option>
                                        <option value="sz">Swaziland</option>
                                        <option value="se">Sweden</option>
                                        <option value="ch">Switzerland</option>
                                        <option value="sy">Syria</option>
                                        <option value="tw">Taiwan</option>
                                        <option value="tj">Tajikistan</option>
                                        <option value="tz">Tanzania</option>
                                        <option value="th">Thailand</option>
                                        <option value="tl">Timor-Leste</option>
                                        <option value="tg">Togo</option>
                                        <option value="tk">Tokelau</option>
                                        <option value="to">Tonga</option>
                                        <option value="tt">
                                          Trinidad and Tobago
                                        </option>
                                        <option value="tn">Tunisia</option>
                                        <option value="tr">Turkey</option>
                                        <option value="tm">Turkmenistan</option>
                                        <option value="tc">
                                          Turks and Caicos Islands
                                        </option>
                                        <option value="tv">Tuvalu</option>
                                        <option value="ug">Uganda</option>
                                        <option value="ua">Ukraine</option>
                                        <option value="ae">
                                          United Arab Emirates
                                        </option>
                                        <option value="gb">
                                          United Kingdom
                                        </option>
                                        <option value="uy">Uruguay</option>
                                        <option value="uz">Uzbekistan</option>
                                        <option value="vu">Vanuatu</option>
                                        <option value="va">
                                          Vatican City State (Holy See)
                                        </option>
                                        <option value="ve">Venezuela</option>
                                        <option value="vn">Vietnam</option>
                                        <option value="vg">
                                          Virgin Islands (British)
                                        </option>
                                        <option value="vi">
                                          Virgin Islands (U.S.)
                                        </option>
                                        <option value="wf">
                                          Wallis and Futuna
                                        </option>
                                        <option value="eh">
                                          Western Sahara
                                        </option>
                                        <option value="ye">Yemen</option>
                                        <option value="zm">Zambia</option>
                                        <option value="zw">Zimbabwe</option>
                                        <option value="oo">Other</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div
                                    class="pe-s-multi-field__item pe-form-field floating-label zipcode-field
                "
                                    data-form-elem-focus="true"
                                  >
                                    <label
                                      for="location-zipcode"
                                      class="pe-form-field__label label-text"
                                    >
                                      ZIP code
                                    </label>
                                    <div
                                      id="ember3583"
                                      class="pe-secondary-locale-tooltip-trigger ember-view"
                                    >
                                      {" "}
                                      <div class="pe-location-picker__postal-code-input-container">
                                        <input
                                          name="zipcode"
                                          maxlength="8"
                                          id="location-zipcode"
                                          class="pe-form-field__location-zipcode ember-text-field ember-view"
                                          type="text"
                                          onChange={this.zipcodeChangeHandler}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="pe-form-field ">
                                  <label
                                    class="pe-form-field__label"
                                    for="pe-location-picker__preferred-location"
                                  >
                                    Locations within this area
                                  </label>

                                  <div
                                    id="ember3753"
                                    class="pe-secondary-locale-tooltip-trigger ember-view"
                                  >
                                    <input
                                      type="text"
                                      name="citystate"
                                      class="ember-view"
                                      onChange={this.locationChangeHandler}
                                      placeholder="Ex:San Jose, California"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="pe-form-field industry-field">
                                <label
                                  for="topcard-industry"
                                  class="pe-form-field__label required"
                                >
                                  Industry
                                </label>

                                <div
                                  id="ember3585"
                                  class="pe-secondary-locale-tooltip-trigger ember-view"
                                >
                                  {" "}
                                  <select
                                    name="industry"
                                    id="topcard-industry"
                                    class="ember-view"
                                    onChange={this.industryChangeHandler}
                                  >
                                    {" "}
                                    <option value="">
                                      Choose an industry…
                                    </option>
                                    <option value="urn:li:fs_industry:47">
                                      Accounting
                                    </option>
                                    <option value="urn:li:fs_industry:94">
                                      Airlines/Aviation
                                    </option>
                                    <option value="urn:li:fs_industry:120">
                                      Alternative Dispute Resolution
                                    </option>
                                    <option value="urn:li:fs_industry:125">
                                      Alternative Medicine
                                    </option>
                                    <option value="urn:li:fs_industry:127">
                                      Animation
                                    </option>
                                    <option value="urn:li:fs_industry:19">
                                      Apparel &amp; Fashion
                                    </option>
                                    <option value="urn:li:fs_industry:50">
                                      Architecture &amp; Planning
                                    </option>
                                    <option value="urn:li:fs_industry:111">
                                      Arts &amp; Crafts
                                    </option>
                                    <option value="urn:li:fs_industry:53">
                                      Automotive
                                    </option>
                                    <option value="urn:li:fs_industry:52">
                                      Aviation &amp; Aerospace
                                    </option>
                                    <option value="urn:li:fs_industry:41">
                                      Banking
                                    </option>
                                    <option value="urn:li:fs_industry:12">
                                      Biotechnology
                                    </option>
                                    <option value="urn:li:fs_industry:36">
                                      Broadcast Media
                                    </option>
                                    <option value="urn:li:fs_industry:49">
                                      Building Materials
                                    </option>
                                    <option value="urn:li:fs_industry:138">
                                      Business Supplies &amp; Equipment
                                    </option>
                                    <option value="urn:li:fs_industry:129">
                                      Capital Markets
                                    </option>
                                    <option value="urn:li:fs_industry:54">
                                      Chemicals
                                    </option>
                                    <option value="urn:li:fs_industry:90">
                                      Civic &amp; Social Organization
                                    </option>
                                    <option value="urn:li:fs_industry:51">
                                      Civil Engineering
                                    </option>
                                    <option value="urn:li:fs_industry:128">
                                      Commercial Real Estate
                                    </option>
                                    <option value="urn:li:fs_industry:118">
                                      Computer &amp; Network Security
                                    </option>
                                    <option value="urn:li:fs_industry:109">
                                      Computer Games
                                    </option>
                                    <option value="urn:li:fs_industry:3">
                                      Computer Hardware
                                    </option>
                                    <option value="urn:li:fs_industry:5">
                                      Computer Networking
                                    </option>
                                    <option value="urn:li:fs_industry:4">
                                      Computer Software
                                    </option>
                                    <option value="urn:li:fs_industry:48">
                                      Construction
                                    </option>
                                    <option value="urn:li:fs_industry:24">
                                      Consumer Electronics
                                    </option>
                                    <option value="urn:li:fs_industry:25">
                                      Consumer Goods
                                    </option>
                                    <option value="urn:li:fs_industry:91">
                                      Consumer Services
                                    </option>
                                    <option value="urn:li:fs_industry:18">
                                      Cosmetics
                                    </option>
                                    <option value="urn:li:fs_industry:65">
                                      Dairy
                                    </option>
                                    <option value="urn:li:fs_industry:1">
                                      Defense &amp; Space
                                    </option>
                                    <option value="urn:li:fs_industry:99">
                                      Design
                                    </option>
                                    <option value="urn:li:fs_industry:132">
                                      E-learning
                                    </option>
                                    <option value="urn:li:fs_industry:69">
                                      Education Management
                                    </option>
                                    <option value="urn:li:fs_industry:112">
                                      Electrical &amp; Electronic Manufacturing
                                    </option>
                                    <option value="urn:li:fs_industry:28">
                                      Entertainment
                                    </option>
                                    <option value="urn:li:fs_industry:86">
                                      Environmental Services
                                    </option>
                                    <option value="urn:li:fs_industry:110">
                                      Events Services
                                    </option>
                                    <option value="urn:li:fs_industry:76">
                                      Executive Office
                                    </option>
                                    <option value="urn:li:fs_industry:122">
                                      Facilities Services
                                    </option>
                                    <option value="urn:li:fs_industry:63">
                                      Farming
                                    </option>
                                    <option value="urn:li:fs_industry:43">
                                      Financial Services
                                    </option>
                                    <option value="urn:li:fs_industry:38">
                                      Fine Art
                                    </option>
                                    <option value="urn:li:fs_industry:66">
                                      Fishery
                                    </option>
                                    <option value="urn:li:fs_industry:34">
                                      Food &amp; Beverages
                                    </option>
                                    <option value="urn:li:fs_industry:23">
                                      Food Production
                                    </option>
                                    <option value="urn:li:fs_industry:101">
                                      Fundraising
                                    </option>
                                    <option value="urn:li:fs_industry:26">
                                      Furniture
                                    </option>
                                    <option value="urn:li:fs_industry:29">
                                      Gambling &amp; Casinos
                                    </option>
                                    <option value="urn:li:fs_industry:145">
                                      Glass, Ceramics &amp; Concrete
                                    </option>
                                    <option value="urn:li:fs_industry:75">
                                      Government Administration
                                    </option>
                                    <option value="urn:li:fs_industry:148">
                                      Government Relations
                                    </option>
                                    <option value="urn:li:fs_industry:140">
                                      Graphic Design
                                    </option>
                                    <option value="urn:li:fs_industry:124">
                                      Health, Wellness &amp; Fitness
                                    </option>
                                    <option value="urn:li:fs_industry:68">
                                      Higher Education
                                    </option>
                                    <option value="urn:li:fs_industry:14">
                                      Hospital &amp; Health Care
                                    </option>
                                    <option value="urn:li:fs_industry:31">
                                      Hospitality
                                    </option>
                                    <option value="urn:li:fs_industry:137">
                                      Human Resources
                                    </option>
                                    <option value="urn:li:fs_industry:134">
                                      Import &amp; Export
                                    </option>
                                    <option value="urn:li:fs_industry:88">
                                      Individual &amp; Family Services
                                    </option>
                                    <option value="urn:li:fs_industry:147">
                                      Industrial Automation
                                    </option>
                                    <option value="urn:li:fs_industry:84">
                                      Information Services
                                    </option>
                                    <option value="urn:li:fs_industry:96">
                                      Information Technology &amp; Services
                                    </option>
                                    <option value="urn:li:fs_industry:42">
                                      Insurance
                                    </option>
                                    <option value="urn:li:fs_industry:74">
                                      International Affairs
                                    </option>
                                    <option value="urn:li:fs_industry:141">
                                      International Trade &amp; Development
                                    </option>
                                    <option value="urn:li:fs_industry:6">
                                      Internet
                                    </option>
                                    <option value="urn:li:fs_industry:45">
                                      Investment Banking
                                    </option>
                                    <option value="urn:li:fs_industry:46">
                                      Investment Management
                                    </option>
                                    <option value="urn:li:fs_industry:73">
                                      Judiciary
                                    </option>
                                    <option value="urn:li:fs_industry:77">
                                      Law Enforcement
                                    </option>
                                    <option value="urn:li:fs_industry:9">
                                      Law Practice
                                    </option>
                                    <option value="urn:li:fs_industry:10">
                                      Legal Services
                                    </option>
                                    <option value="urn:li:fs_industry:72">
                                      Legislative Office
                                    </option>
                                    <option value="urn:li:fs_industry:30">
                                      Leisure, Travel &amp; Tourism
                                    </option>
                                    <option value="urn:li:fs_industry:85">
                                      Libraries
                                    </option>
                                    <option value="urn:li:fs_industry:116">
                                      Logistics &amp; Supply Chain
                                    </option>
                                    <option value="urn:li:fs_industry:143">
                                      Luxury Goods &amp; Jewelry
                                    </option>
                                    <option value="urn:li:fs_industry:55">
                                      Machinery
                                    </option>
                                    <option value="urn:li:fs_industry:11">
                                      Management Consulting
                                    </option>
                                    <option value="urn:li:fs_industry:95">
                                      Maritime
                                    </option>
                                    <option value="urn:li:fs_industry:97">
                                      Market Research
                                    </option>
                                    <option value="urn:li:fs_industry:80">
                                      Marketing &amp; Advertising
                                    </option>
                                    <option value="urn:li:fs_industry:135">
                                      Mechanical Or Industrial Engineering
                                    </option>
                                    <option value="urn:li:fs_industry:126">
                                      Media Production
                                    </option>
                                    <option value="urn:li:fs_industry:17">
                                      Medical Device
                                    </option>
                                    <option value="urn:li:fs_industry:13">
                                      Medical Practice
                                    </option>
                                    <option value="urn:li:fs_industry:139">
                                      Mental Health Care
                                    </option>
                                    <option value="urn:li:fs_industry:71">
                                      Military
                                    </option>
                                    <option value="urn:li:fs_industry:56">
                                      Mining &amp; Metals
                                    </option>
                                    <option value="urn:li:fs_industry:35">
                                      Motion Pictures &amp; Film
                                    </option>
                                    <option value="urn:li:fs_industry:37">
                                      Museums &amp; Institutions
                                    </option>
                                    <option value="urn:li:fs_industry:115">
                                      Music
                                    </option>
                                    <option value="urn:li:fs_industry:114">
                                      Nanotechnology
                                    </option>
                                    <option value="urn:li:fs_industry:81">
                                      Newspapers
                                    </option>
                                    <option value="urn:li:fs_industry:100">
                                      Non-profit Organization Management
                                    </option>
                                    <option value="urn:li:fs_industry:57">
                                      Oil &amp; Energy
                                    </option>
                                    <option value="urn:li:fs_industry:113">
                                      Online Media
                                    </option>
                                    <option value="urn:li:fs_industry:123">
                                      Outsourcing/Offshoring
                                    </option>
                                    <option value="urn:li:fs_industry:87">
                                      Package/Freight Delivery
                                    </option>
                                    <option value="urn:li:fs_industry:146">
                                      Packaging &amp; Containers
                                    </option>
                                    <option value="urn:li:fs_industry:61">
                                      Paper &amp; Forest Products
                                    </option>
                                    <option value="urn:li:fs_industry:39">
                                      Performing Arts
                                    </option>
                                    <option value="urn:li:fs_industry:15">
                                      Pharmaceuticals
                                    </option>
                                    <option value="urn:li:fs_industry:131">
                                      Philanthropy
                                    </option>
                                    <option value="urn:li:fs_industry:136">
                                      Photography
                                    </option>
                                    <option value="urn:li:fs_industry:117">
                                      Plastics
                                    </option>
                                    <option value="urn:li:fs_industry:107">
                                      Political Organization
                                    </option>
                                    <option value="urn:li:fs_industry:67">
                                      Primary/Secondary Education
                                    </option>
                                    <option value="urn:li:fs_industry:83">
                                      Printing
                                    </option>
                                    <option value="urn:li:fs_industry:105">
                                      Professional Training &amp; Coaching
                                    </option>
                                    <option value="urn:li:fs_industry:102">
                                      Program Development
                                    </option>
                                    <option value="urn:li:fs_industry:79">
                                      Public Policy
                                    </option>
                                    <option value="urn:li:fs_industry:98">
                                      Public Relations &amp; Communications
                                    </option>
                                    <option value="urn:li:fs_industry:78">
                                      Public Safety
                                    </option>
                                    <option value="urn:li:fs_industry:82">
                                      Publishing
                                    </option>
                                    <option value="urn:li:fs_industry:62">
                                      Railroad Manufacture
                                    </option>
                                    <option value="urn:li:fs_industry:64">
                                      Ranching
                                    </option>
                                    <option value="urn:li:fs_industry:44">
                                      Real Estate
                                    </option>
                                    <option value="urn:li:fs_industry:40">
                                      Recreational Facilities &amp; Services
                                    </option>
                                    <option value="urn:li:fs_industry:89">
                                      Religious Institutions
                                    </option>
                                    <option value="urn:li:fs_industry:144">
                                      Renewables &amp; Environment
                                    </option>
                                    <option value="urn:li:fs_industry:70">
                                      Research
                                    </option>
                                    <option value="urn:li:fs_industry:32">
                                      Restaurants
                                    </option>
                                    <option value="urn:li:fs_industry:27">
                                      Retail
                                    </option>
                                    <option value="urn:li:fs_industry:121">
                                      Security &amp; Investigations
                                    </option>
                                    <option value="urn:li:fs_industry:7">
                                      Semiconductors
                                    </option>
                                    <option value="urn:li:fs_industry:58">
                                      Shipbuilding
                                    </option>
                                    <option value="urn:li:fs_industry:20">
                                      Sporting Goods
                                    </option>
                                    <option value="urn:li:fs_industry:33">
                                      Sports
                                    </option>
                                    <option value="urn:li:fs_industry:104">
                                      Staffing &amp; Recruiting
                                    </option>
                                    <option value="urn:li:fs_industry:22">
                                      Supermarkets
                                    </option>
                                    <option value="urn:li:fs_industry:8">
                                      Telecommunications
                                    </option>
                                    <option value="urn:li:fs_industry:60">
                                      Textiles
                                    </option>
                                    <option value="urn:li:fs_industry:130">
                                      Think Tanks
                                    </option>
                                    <option value="urn:li:fs_industry:21">
                                      Tobacco
                                    </option>
                                    <option value="urn:li:fs_industry:108">
                                      Translation &amp; Localization
                                    </option>
                                    <option value="urn:li:fs_industry:92">
                                      Transportation/Trucking/Railroad
                                    </option>
                                    <option value="urn:li:fs_industry:59">
                                      Utilities
                                    </option>
                                    <option value="urn:li:fs_industry:106">
                                      Venture Capital &amp; Private Equity
                                    </option>
                                    <option value="urn:li:fs_industry:16">
                                      Veterinary
                                    </option>
                                    <option value="urn:li:fs_industry:93">
                                      Warehousing
                                    </option>
                                    <option value="urn:li:fs_industry:133">
                                      Wholesale
                                    </option>
                                    <option value="urn:li:fs_industry:142">
                                      Wine &amp; Spirits
                                    </option>
                                    <option value="urn:li:fs_industry:119">
                                      Wireless
                                    </option>
                                    <option value="urn:li:fs_industry:103">
                                      Writing &amp; Editing
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div class="pe-form-field summary-field floating-label  ">
                                <label
                                  for="topcard-summary"
                                  class="pe-form-field__label label-text"
                                >
                                  Summary
                                </label>

                                <textarea
                                  name="summary"
                                  id="topcard-summary"
                                  class="ember-text-area pe-form-field__textarea ember-view"
                                  onChange={this.summaryChangeHandler}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div id="ember3742" class="ember-view">
                        <div id="ember3743" class="ember-view" />
                      </div>
                    </div>
                  </div>
                  <div
                    id="ember3744"
                    class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"
                  />
                  <div
                    id="ember3745"
                    class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"
                  />
                  <div
                    id="ember3746"
                    class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"
                  />
                  <div
                    id="ember3747"
                    class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.submitSummary}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="experience" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Experience</h4>
              </div>
              <div class="modal-body">
                <div class="pe-s-form__body pe-form-body">
                  <div
                    id="ember1628"
                    class="pe-form-field position-title floating-label ember-view"
                  >
                    <div class="pe-form-field position-title  ">
                      <div id="ember1629" class="ember-view">
                        {" "}
                        <label
                          for="position-title-typeahead"
                          class="mb1 required"
                        >
                          Title
                        </label>
                        <input
                          role="combobox"
                          autocomplete="off"
                          spellcheck="false"
                          aria-autocomplete="list"
                          aria-owns="ember1630-results"
                          id="position-title-typeahead"
                          placeholder="Ex: Manager"
                          maxlength="100"
                          type="text"
                        />
                      </div>

                      <div id="ember1632" class="ember-view" />
                    </div>
                  </div>

                  <div
                    id="ember1633"
                    class="pe-form-field position-company-name has-logo floating-label ember-view"
                  >
                    <div class="pe-logo-container">
                      <img
                        class="lazy-image pe-logo-container__img ghost-company loaded"
                        alt=""
                        height="24"
                        width="24"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      />

                      <div id="ember1634" class="ember-view">
                        {" "}
                        <label
                          for="position-company-typeahead"
                          class="mb1 required"
                        >
                          Company
                        </label>
                        <input
                          role="combobox"
                          autocomplete="off"
                          spellcheck="false"
                          aria-autocomplete="list"
                          aria-owns="ember1635-results"
                          id="position-company-typeahead"
                          placeholder="Ex: Microsoft"
                          maxlength="100"
                          type="text"
                        />
                      </div>
                    </div>

                    <div id="ember1637" class="ember-view" />
                  </div>

                  <div
                    id="ember1638"
                    class="pe-form-field position-location-name floating-label ember-view"
                  >
                    <div class="pe-form-field position-location-name  ">
                      <div id="ember1639" class="ember-view">
                        {" "}
                        <label for="position-location-typeahead" class="mb1 ">
                          Location
                        </label>
                        <input
                          role="combobox"
                          autocomplete="off"
                          spellcheck="false"
                          aria-autocomplete="list"
                          aria-owns="ember1640-results"
                          id="position-location-typeahead"
                          placeholder="Ex: London, United Kingdom"
                          maxlength="80"
                          type="text"
                        />
                      </div>

                      <div id="ember1642" class="ember-view" />
                    </div>
                  </div>

                  <div
                    id="ember1643"
                    class="pe-secondary-locale-tooltip-trigger ember-view"
                  >
                    {" "}
                    <fieldset
                      id="ember1644"
                      class="pe-form-time-period pe-form-field ember-view"
                    >
                      <div class="pe-form-time-period__container">
                        <fieldset class="pe-form-time-period__start-date">
                          <label class="pe-form-field__label t-14 t-black t-normal required">
                            From
                          </label>

                          <div class="pe-form-time-period__date-field ">
                            <div class="pe-form-time-period__date-unit">
                              <label
                                class="visually-hidden"
                                for="position-start-month"
                              >
                                Start month
                              </label>
                              <span id="ember1645" class="ember-view">
                                <select
                                  data-control-name="edit_position_start_date_month"
                                  name="startMonth"
                                  id="position-start-month"
                                  class="ember-view"
                                >
                                  {" "}
                                  <option value="">Month</option>
                                  <option value="1">January</option>
                                  <option value="2">February</option>
                                  <option value="3">March</option>
                                  <option value="4">April</option>
                                  <option value="5">May</option>
                                  <option value="6">June</option>
                                  <option value="7">July</option>
                                  <option value="8">August</option>
                                  <option value="9">September</option>
                                  <option value="10">October</option>
                                  <option value="11">November</option>
                                  <option value="12">December</option>
                                </select>
                              </span>
                            </div>

                            <div class="pe-form-time-period__date-unit">
                              <label
                                class="visually-hidden"
                                for="position-start-year"
                              >
                                Start year
                              </label>
                              <span id="ember1659" class="ember-view">
                                <select
                                  data-control-name="edit_position_start_date_year"
                                  name="startYear"
                                  id="position-start-year"
                                  class="ember-view"
                                >
                                  {" "}
                                  <option value="">Year</option>
                                  <option value="2018">2018</option>
                                  <option value="2017">2017</option>
                                  <option value="2016">2016</option>
                                  <option value="2015">2015</option>
                                  <option value="2014">2014</option>
                                  <option value="2013">2013</option>
                                  <option value="2012">2012</option>
                                  <option value="2011">2011</option>
                                  <option value="2010">2010</option>
                                  <option value="2009">2009</option>
                                  <option value="2008">2008</option>
                                  <option value="2007">2007</option>
                                  <option value="2006">2006</option>
                                  <option value="2005">2005</option>
                                  <option value="2004">2004</option>
                                  <option value="2003">2003</option>
                                  <option value="2002">2002</option>
                                  <option value="2001">2001</option>
                                  <option value="2000">2000</option>
                                  <option value="1999">1999</option>
                                  <option value="1998">1998</option>
                                  <option value="1997">1997</option>
                                  <option value="1996">1996</option>
                                  <option value="1995">1995</option>
                                  <option value="1994">1994</option>
                                  <option value="1993">1993</option>
                                  <option value="1992">1992</option>
                                  <option value="1991">1991</option>
                                  <option value="1990">1990</option>
                                  <option value="1989">1989</option>
                                  <option value="1988">1988</option>
                                  <option value="1987">1987</option>
                                  <option value="1986">1986</option>
                                  <option value="1985">1985</option>
                                  <option value="1984">1984</option>
                                  <option value="1983">1983</option>
                                  <option value="1982">1982</option>
                                  <option value="1981">1981</option>
                                  <option value="1980">1980</option>
                                  <option value="1979">1979</option>
                                  <option value="1978">1978</option>
                                  <option value="1977">1977</option>
                                  <option value="1976">1976</option>
                                  <option value="1975">1975</option>
                                  <option value="1974">1974</option>
                                  <option value="1973">1973</option>
                                  <option value="1972">1972</option>
                                  <option value="1971">1971</option>
                                  <option value="1970">1970</option>
                                  <option value="1969">1969</option>
                                  <option value="1968">1968</option>
                                  <option value="1967">1967</option>
                                  <option value="1966">1966</option>
                                  <option value="1965">1965</option>
                                  <option value="1964">1964</option>
                                  <option value="1963">1963</option>
                                  <option value="1962">1962</option>
                                  <option value="1961">1961</option>
                                  <option value="1960">1960</option>
                                  <option value="1959">1959</option>
                                </select>
                              </span>
                            </div>
                          </div>
                        </fieldset>

                        <p class="pe-form-time-period__present-activity pt5 mt2">
                          Present
                        </p>
                      </div>

                      <div id="ember1797" class="ember-view" />

                      <div
                        id="ember1798"
                        class="pe-form-time-period__ongoing-activity mt4 ember-view"
                      >
                        <input
                          data-control-name="edit_position_date_toggle"
                          tabindex="0"
                          id="position-currently-works-here"
                          class="ember-checkbox state-checkbox visually-hidden toggle-switch__input ember-view"
                          type="checkbox"
                        />
                      </div>
                    </fieldset>
                  </div>
                  <div id="ember1818" class="pe-form-field mb3 ember-view">
                    <div class="pe-form-field">
                      <label
                        for="position-industry"
                        class="pe-form-field__label required"
                      >
                        Industry
                      </label>

                      <select
                        name="industry"
                        id="position-industry"
                        class="position-industry mt1 ember-view"
                      >
                        {" "}
                        <option value="">Choose an industry…</option>
                        <option value="urn:li:fs_industry:47">
                          Accounting
                        </option>
                        <option value="urn:li:fs_industry:94">
                          Airlines/Aviation
                        </option>
                        <option value="urn:li:fs_industry:120">
                          Alternative Dispute Resolution
                        </option>
                        <option value="urn:li:fs_industry:125">
                          Alternative Medicine
                        </option>
                        <option value="urn:li:fs_industry:127">
                          Animation
                        </option>
                        <option value="urn:li:fs_industry:19">
                          Apparel &amp; Fashion
                        </option>
                        <option value="urn:li:fs_industry:50">
                          Architecture &amp; Planning
                        </option>
                        <option value="urn:li:fs_industry:111">
                          Arts &amp; Crafts
                        </option>
                        <option value="urn:li:fs_industry:53">
                          Automotive
                        </option>
                        <option value="urn:li:fs_industry:52">
                          Aviation &amp; Aerospace
                        </option>
                        <option value="urn:li:fs_industry:41">Banking</option>
                        <option value="urn:li:fs_industry:12">
                          Biotechnology
                        </option>
                        <option value="urn:li:fs_industry:36">
                          Broadcast Media
                        </option>
                        <option value="urn:li:fs_industry:49">
                          Building Materials
                        </option>
                        <option value="urn:li:fs_industry:138">
                          Business Supplies &amp; Equipment
                        </option>
                        <option value="urn:li:fs_industry:129">
                          Capital Markets
                        </option>
                        <option value="urn:li:fs_industry:54">Chemicals</option>
                        <option value="urn:li:fs_industry:90">
                          Civic &amp; Social Organization
                        </option>
                        <option value="urn:li:fs_industry:51">
                          Civil Engineering
                        </option>
                        <option value="urn:li:fs_industry:128">
                          Commercial Real Estate
                        </option>
                        <option value="urn:li:fs_industry:118">
                          Computer &amp; Network Security
                        </option>
                        <option value="urn:li:fs_industry:109">
                          Computer Games
                        </option>
                        <option value="urn:li:fs_industry:3">
                          Computer Hardware
                        </option>
                        <option value="urn:li:fs_industry:5">
                          Computer Networking
                        </option>
                        <option value="urn:li:fs_industry:4">
                          Computer Software
                        </option>
                        <option value="urn:li:fs_industry:48">
                          Construction
                        </option>
                        <option value="urn:li:fs_industry:24">
                          Consumer Electronics
                        </option>
                        <option value="urn:li:fs_industry:25">
                          Consumer Goods
                        </option>
                        <option value="urn:li:fs_industry:91">
                          Consumer Services
                        </option>
                        <option value="urn:li:fs_industry:18">Cosmetics</option>
                        <option value="urn:li:fs_industry:65">Dairy</option>
                        <option value="urn:li:fs_industry:1">
                          Defense &amp; Space
                        </option>
                        <option value="urn:li:fs_industry:99">Design</option>
                        <option value="urn:li:fs_industry:132">
                          E-learning
                        </option>
                        <option value="urn:li:fs_industry:69">
                          Education Management
                        </option>
                        <option value="urn:li:fs_industry:112">
                          Electrical &amp; Electronic Manufacturing
                        </option>
                        <option value="urn:li:fs_industry:28">
                          Entertainment
                        </option>
                        <option value="urn:li:fs_industry:86">
                          Environmental Services
                        </option>
                        <option value="urn:li:fs_industry:110">
                          Events Services
                        </option>
                        <option value="urn:li:fs_industry:76">
                          Executive Office
                        </option>
                        <option value="urn:li:fs_industry:122">
                          Facilities Services
                        </option>
                        <option value="urn:li:fs_industry:63">Farming</option>
                        <option value="urn:li:fs_industry:43">
                          Financial Services
                        </option>
                        <option value="urn:li:fs_industry:38">Fine Art</option>
                        <option value="urn:li:fs_industry:66">Fishery</option>
                        <option value="urn:li:fs_industry:34">
                          Food &amp; Beverages
                        </option>
                        <option value="urn:li:fs_industry:23">
                          Food Production
                        </option>
                        <option value="urn:li:fs_industry:101">
                          Fundraising
                        </option>
                        <option value="urn:li:fs_industry:26">Furniture</option>
                        <option value="urn:li:fs_industry:29">
                          Gambling &amp; Casinos
                        </option>
                        <option value="urn:li:fs_industry:145">
                          Glass, Ceramics &amp; Concrete
                        </option>
                        <option value="urn:li:fs_industry:75">
                          Government Administration
                        </option>
                        <option value="urn:li:fs_industry:148">
                          Government Relations
                        </option>
                        <option value="urn:li:fs_industry:140">
                          Graphic Design
                        </option>
                        <option value="urn:li:fs_industry:124">
                          Health, Wellness &amp; Fitness
                        </option>
                        <option value="urn:li:fs_industry:68">
                          Higher Education
                        </option>
                        <option value="urn:li:fs_industry:14">
                          Hospital &amp; Health Care
                        </option>
                        <option value="urn:li:fs_industry:31">
                          Hospitality
                        </option>
                        <option value="urn:li:fs_industry:137">
                          Human Resources
                        </option>
                        <option value="urn:li:fs_industry:134">
                          Import &amp; Export
                        </option>
                        <option value="urn:li:fs_industry:88">
                          Individual &amp; Family Services
                        </option>
                        <option value="urn:li:fs_industry:147">
                          Industrial Automation
                        </option>
                        <option value="urn:li:fs_industry:84">
                          Information Services
                        </option>
                        <option value="urn:li:fs_industry:96">
                          Information Technology &amp; Services
                        </option>
                        <option value="urn:li:fs_industry:42">Insurance</option>
                        <option value="urn:li:fs_industry:74">
                          International Affairs
                        </option>
                        <option value="urn:li:fs_industry:141">
                          International Trade &amp; Development
                        </option>
                        <option value="urn:li:fs_industry:6">Internet</option>
                        <option value="urn:li:fs_industry:45">
                          Investment Banking
                        </option>
                        <option value="urn:li:fs_industry:46">
                          Investment Management
                        </option>
                        <option value="urn:li:fs_industry:73">Judiciary</option>
                        <option value="urn:li:fs_industry:77">
                          Law Enforcement
                        </option>
                        <option value="urn:li:fs_industry:9">
                          Law Practice
                        </option>
                        <option value="urn:li:fs_industry:10">
                          Legal Services
                        </option>
                        <option value="urn:li:fs_industry:72">
                          Legislative Office
                        </option>
                        <option value="urn:li:fs_industry:30">
                          Leisure, Travel &amp; Tourism
                        </option>
                        <option value="urn:li:fs_industry:85">Libraries</option>
                        <option value="urn:li:fs_industry:116">
                          Logistics &amp; Supply Chain
                        </option>
                        <option value="urn:li:fs_industry:143">
                          Luxury Goods &amp; Jewelry
                        </option>
                        <option value="urn:li:fs_industry:55">Machinery</option>
                        <option value="urn:li:fs_industry:11">
                          Management Consulting
                        </option>
                        <option value="urn:li:fs_industry:95">Maritime</option>
                        <option value="urn:li:fs_industry:97">
                          Market Research
                        </option>
                        <option value="urn:li:fs_industry:80">
                          Marketing &amp; Advertising
                        </option>
                        <option value="urn:li:fs_industry:135">
                          Mechanical Or Industrial Engineering
                        </option>
                        <option value="urn:li:fs_industry:126">
                          Media Production
                        </option>
                        <option value="urn:li:fs_industry:17">
                          Medical Device
                        </option>
                        <option value="urn:li:fs_industry:13">
                          Medical Practice
                        </option>
                        <option value="urn:li:fs_industry:139">
                          Mental Health Care
                        </option>
                        <option value="urn:li:fs_industry:71">Military</option>
                        <option value="urn:li:fs_industry:56">
                          Mining &amp; Metals
                        </option>
                        <option value="urn:li:fs_industry:35">
                          Motion Pictures &amp; Film
                        </option>
                        <option value="urn:li:fs_industry:37">
                          Museums &amp; Institutions
                        </option>
                        <option value="urn:li:fs_industry:115">Music</option>
                        <option value="urn:li:fs_industry:114">
                          Nanotechnology
                        </option>
                        <option value="urn:li:fs_industry:81">
                          Newspapers
                        </option>
                        <option value="urn:li:fs_industry:100">
                          Non-profit Organization Management
                        </option>
                        <option value="urn:li:fs_industry:57">
                          Oil &amp; Energy
                        </option>
                        <option value="urn:li:fs_industry:113">
                          Online Media
                        </option>
                        <option value="urn:li:fs_industry:123">
                          Outsourcing/Offshoring
                        </option>
                        <option value="urn:li:fs_industry:87">
                          Package/Freight Delivery
                        </option>
                        <option value="urn:li:fs_industry:146">
                          Packaging &amp; Containers
                        </option>
                        <option value="urn:li:fs_industry:61">
                          Paper &amp; Forest Products
                        </option>
                        <option value="urn:li:fs_industry:39">
                          Performing Arts
                        </option>
                        <option value="urn:li:fs_industry:15">
                          Pharmaceuticals
                        </option>
                        <option value="urn:li:fs_industry:131">
                          Philanthropy
                        </option>
                        <option value="urn:li:fs_industry:136">
                          Photography
                        </option>
                        <option value="urn:li:fs_industry:117">Plastics</option>
                        <option value="urn:li:fs_industry:107">
                          Political Organization
                        </option>
                        <option value="urn:li:fs_industry:67">
                          Primary/Secondary Education
                        </option>
                        <option value="urn:li:fs_industry:83">Printing</option>
                        <option value="urn:li:fs_industry:105">
                          Professional Training &amp; Coaching
                        </option>
                        <option value="urn:li:fs_industry:102">
                          Program Development
                        </option>
                        <option value="urn:li:fs_industry:79">
                          Public Policy
                        </option>
                        <option value="urn:li:fs_industry:98">
                          Public Relations &amp; Communications
                        </option>
                        <option value="urn:li:fs_industry:78">
                          Public Safety
                        </option>
                        <option value="urn:li:fs_industry:82">
                          Publishing
                        </option>
                        <option value="urn:li:fs_industry:62">
                          Railroad Manufacture
                        </option>
                        <option value="urn:li:fs_industry:64">Ranching</option>
                        <option value="urn:li:fs_industry:44">
                          Real Estate
                        </option>
                        <option value="urn:li:fs_industry:40">
                          Recreational Facilities &amp; Services
                        </option>
                        <option value="urn:li:fs_industry:89">
                          Religious Institutions
                        </option>
                        <option value="urn:li:fs_industry:144">
                          Renewables &amp; Environment
                        </option>
                        <option value="urn:li:fs_industry:70">Research</option>
                        <option value="urn:li:fs_industry:32">
                          Restaurants
                        </option>
                        <option value="urn:li:fs_industry:27">Retail</option>
                        <option value="urn:li:fs_industry:121">
                          Security &amp; Investigations
                        </option>
                        <option value="urn:li:fs_industry:7">
                          Semiconductors
                        </option>
                        <option value="urn:li:fs_industry:58">
                          Shipbuilding
                        </option>
                        <option value="urn:li:fs_industry:20">
                          Sporting Goods
                        </option>
                        <option value="urn:li:fs_industry:33">Sports</option>
                        <option value="urn:li:fs_industry:104">
                          Staffing &amp; Recruiting
                        </option>
                        <option value="urn:li:fs_industry:22">
                          Supermarkets
                        </option>
                        <option value="urn:li:fs_industry:8">
                          Telecommunications
                        </option>
                        <option value="urn:li:fs_industry:60">Textiles</option>
                        <option value="urn:li:fs_industry:130">
                          Think Tanks
                        </option>
                        <option value="urn:li:fs_industry:21">Tobacco</option>
                        <option value="urn:li:fs_industry:108">
                          Translation &amp; Localization
                        </option>
                        <option value="urn:li:fs_industry:92">
                          Transportation/Trucking/Railroad
                        </option>
                        <option value="urn:li:fs_industry:59">Utilities</option>
                        <option value="urn:li:fs_industry:106">
                          Venture Capital &amp; Private Equity
                        </option>
                        <option value="urn:li:fs_industry:16">
                          Veterinary
                        </option>
                        <option value="urn:li:fs_industry:93">
                          Warehousing
                        </option>
                        <option value="urn:li:fs_industry:133">
                          Wholesale
                        </option>
                        <option value="urn:li:fs_industry:142">
                          Wine &amp; Spirits
                        </option>
                        <option value="urn:li:fs_industry:119">Wireless</option>
                        <option value="urn:li:fs_industry:103">
                          Writing &amp; Editing
                        </option>
                      </select>
                    </div>
                  </div>

                  <div id="ember1969" class="ember-view">
                    <div id="ember1970" class="pe-form-field mb3 ember-view">
                      <input
                        tabindex="0"
                        id="position-update-headline-checkbox"
                        class="ember-checkbox state-checkbox visually-hidden toggle-switch__input ember-view"
                        type="checkbox"
                      />
                    </div>
                    <div
                      class="pe-form-field pe-position-form__headline-field floating-label  "
                      data-form-elem-focus="true"
                    >
                      <label
                        for="position-headline"
                        class="pe-form-field__label label-text required"
                      >
                        Headline
                      </label>

                      <textarea
                        name="headline"
                        id="position-headline"
                        class="pe-position-form__headline-text ember-text-area pe-form-field__textarea ember-view"
                      />
                    </div>
                  </div>

                  <div
                    id="ember1800"
                    class="pe-form-field position-description floating-label ember-view"
                  >
                    <label
                      for="position-description"
                      class="pe-form-field__label label-text"
                    >
                      Description
                    </label>

                    <textarea
                      name="description"
                      id="position-description"
                      class="ember-text-area pe-form-field__textarea ember-view"
                    />
                  </div>
                  <div
                    id="ember1802"
                    class="pe-form-field pe-treasury-view ember-view"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="education" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Education</h4>
              </div>
              <div class="modal-body">
                <div class="pe-s-form__body pe-form-body">
                  <div class="pe-form-field edu-school-name has-logo  ">
                    <div class="pe-logo-container">
                      <img
                        class="lazy-image pe-logo-container__img ghost-school loaded"
                        alt=""
                        height="24"
                        width="24"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      />

                      <div id="ember2873" class="ember-view">
                        {" "}
                        <label for="edu-school-typeahead" class="mb1 required">
                          School
                        </label>
                        <input
                          role="combobox"
                          autocomplete="off"
                          spellcheck="false"
                          aria-autocomplete="list"
                          aria-owns="ember2874-results"
                          id="edu-school-typeahead"
                          placeholder="Ex: Boston University"
                          type="text"
                        />
                      </div>
                    </div>

                    <div id="ember2876" class="ember-view" />
                  </div>

                  <div class="pe-form-field edu-degree-name">
                    <div id="ember2877" class="ember-view">
                      {" "}
                      <label for="edu-degree-typeahead" class="mb1 ">
                        Degree
                      </label>
                      <input
                        role="combobox"
                        autocomplete="off"
                        spellcheck="false"
                        aria-autocomplete="list"
                        aria-owns="ember2878-results"
                        id="edu-degree-typeahead"
                        placeholder="Ex: Bachelor’s"
                        type="text"
                      />
                    </div>

                    <div id="ember2880" class="ember-view" />
                  </div>

                  <div class="pe-form-field edu-field-of-study">
                    <div id="ember2881" class="ember-view">
                      {" "}
                      <label for="edu-field-of-study-typeahead" class="mb1 ">
                        Field of study
                      </label>
                      <input
                        role="combobox"
                        autocomplete="off"
                        spellcheck="false"
                        aria-autocomplete="list"
                        aria-owns="ember2882-results"
                        id="edu-field-of-study-typeahead"
                        placeholder="Ex: Business"
                        type="text"
                      />
                    </div>

                    <div id="ember2884" class="ember-view" />
                  </div>

                  <div class="pe-form-field floating-label  ">
                    <label
                      for="edu-grade"
                      class="pe-form-field__label label-text"
                    >
                      Grade
                    </label>

                    <input
                      name="grade"
                      maxlength="80"
                      id="edu-grade"
                      class="ember-text-field pe-form-field__text-input ember-view"
                      type="text"
                    />
                  </div>

                  <div class="pe-form-field pe-education-form__activities-field floating-label  ">
                    <label
                      for="edu-activities-societies"
                      class="pe-form-field__label label-text"
                    >
                      Activities and societies
                    </label>

                    <textarea
                      name="activities"
                      id="edu-activities-societies"
                      class="pe-education-form__activities-text ember-text-area pe-form-field__textarea ember-view"
                    />

                    <div class="pe-form-field__aux">
                      <p class="pe-form-field__help-text t-12 t-black--light t-normal t-italic">
                        Ex: Alpha Phi Omega, Marching Band, Volleyball
                      </p>
                    </div>
                  </div>

                  <div
                    id="ember2887"
                    class="pe-secondary-locale-tooltip-trigger ember-view"
                  >
                    <fieldset class="pe-form-field pe-form-time-period ">
                      <div class="pe-form-time-period__container">
                        <div class="pe-form-time-period__start-date">
                          <label
                            for="pe-education-form__start-year"
                            class="pe-form-field__label"
                          >
                            From Year
                          </label>
                          <span id="ember2888" class="ember-view">
                            <select
                              data-control-name="edit_education_start_year"
                              name="startYear"
                              id="pe-education-form__start-year"
                              class="pe-education-form__start-year ember-view"
                            >
                              {" "}
                              <option value="">Year</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                              <option value="2013">2013</option>
                              <option value="2012">2012</option>
                              <option value="2011">2011</option>
                              <option value="2010">2010</option>
                              <option value="2009">2009</option>
                              <option value="2008">2008</option>
                              <option value="2007">2007</option>
                              <option value="2006">2006</option>
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                              <option value="1950">1950</option>
                              <option value="1949">1949</option>
                              <option value="1948">1948</option>
                              <option value="1947">1947</option>
                              <option value="1946">1946</option>
                              <option value="1945">1945</option>
                              <option value="1944">1944</option>
                              <option value="1943">1943</option>
                              <option value="1942">1942</option>
                              <option value="1941">1941</option>
                              <option value="1940">1940</option>
                              <option value="1939">1939</option>
                              <option value="1938">1938</option>
                              <option value="1937">1937</option>
                              <option value="1936">1936</option>
                              <option value="1935">1935</option>
                              <option value="1934">1934</option>
                              <option value="1933">1933</option>
                              <option value="1932">1932</option>
                              <option value="1931">1931</option>
                              <option value="1930">1930</option>
                              <option value="1929">1929</option>
                              <option value="1928">1928</option>
                              <option value="1927">1927</option>
                              <option value="1926">1926</option>
                              <option value="1925">1925</option>
                              <option value="1924">1924</option>
                              <option value="1923">1923</option>
                              <option value="1922">1922</option>
                              <option value="1921">1921</option>
                              <option value="1920">1920</option>
                              <option value="1919">1919</option>
                              <option value="1918">1918</option>
                              <option value="1917">1917</option>
                              <option value="1916">1916</option>
                              <option value="1915">1915</option>
                              <option value="1914">1914</option>
                              <option value="1913">1913</option>
                              <option value="1912">1912</option>
                              <option value="1911">1911</option>
                              <option value="1910">1910</option>
                              <option value="1909">1909</option>
                              <option value="1908">1908</option>
                              <option value="1907">1907</option>
                              <option value="1906">1906</option>
                              <option value="1905">1905</option>
                              <option value="1904">1904</option>
                              <option value="1903">1903</option>
                              <option value="1902">1902</option>
                              <option value="1901">1901</option>
                              <option value="1900">1900</option>
                            </select>
                          </span>
                        </div>

                        <div class="pe-form-time-period__end-date">
                          <label
                            for="pe-education-form__end-year"
                            class="pe-form-field__label"
                          >
                            To Year (or expected)
                          </label>
                          <span id="ember3009" class="ember-view">
                            <select
                              data-control-name="edit_education_end_year"
                              id="pe-education-form__end-year"
                              class="pe-education-form__end-year ember-view"
                            >
                              {" "}
                              <option value="">Year</option>
                              <option value="2025">2025</option>
                              <option value="2024">2024</option>
                              <option value="2023">2023</option>
                              <option value="2022">2022</option>
                              <option value="2021">2021</option>
                              <option value="2020">2020</option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                              <option value="2017">2017</option>
                              <option value="2016">2016</option>
                              <option value="2015">2015</option>
                              <option value="2014">2014</option>
                              <option value="2013">2013</option>
                              <option value="2012">2012</option>
                              <option value="2011">2011</option>
                              <option value="2010">2010</option>
                              <option value="2009">2009</option>
                              <option value="2008">2008</option>
                              <option value="2007">2007</option>
                              <option value="2006">2006</option>
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                              <option value="1950">1950</option>
                              <option value="1949">1949</option>
                              <option value="1948">1948</option>
                              <option value="1947">1947</option>
                              <option value="1946">1946</option>
                              <option value="1945">1945</option>
                              <option value="1944">1944</option>
                              <option value="1943">1943</option>
                              <option value="1942">1942</option>
                              <option value="1941">1941</option>
                              <option value="1940">1940</option>
                              <option value="1939">1939</option>
                              <option value="1938">1938</option>
                              <option value="1937">1937</option>
                              <option value="1936">1936</option>
                              <option value="1935">1935</option>
                              <option value="1934">1934</option>
                              <option value="1933">1933</option>
                              <option value="1932">1932</option>
                              <option value="1931">1931</option>
                              <option value="1930">1930</option>
                              <option value="1929">1929</option>
                              <option value="1928">1928</option>
                              <option value="1927">1927</option>
                              <option value="1926">1926</option>
                              <option value="1925">1925</option>
                              <option value="1924">1924</option>
                              <option value="1923">1923</option>
                              <option value="1922">1922</option>
                              <option value="1921">1921</option>
                              <option value="1920">1920</option>
                              <option value="1919">1919</option>
                              <option value="1918">1918</option>
                              <option value="1917">1917</option>
                              <option value="1916">1916</option>
                              <option value="1915">1915</option>
                              <option value="1914">1914</option>
                              <option value="1913">1913</option>
                              <option value="1912">1912</option>
                              <option value="1911">1911</option>
                              <option value="1910">1910</option>
                              <option value="1909">1909</option>
                              <option value="1908">1908</option>
                              <option value="1907">1907</option>
                              <option value="1906">1906</option>
                              <option value="1905">1905</option>
                              <option value="1904">1904</option>
                              <option value="1903">1903</option>
                              <option value="1902">1902</option>
                              <option value="1901">1901</option>
                              <option value="1900">1900</option>
                            </select>
                          </span>
                        </div>
                      </div>

                      <div id="ember3137" class="ember-view" />
                    </fieldset>
                  </div>

                  <div class="pe-form-field edu-description floating-label  ">
                    <label
                      for="edu-description"
                      class="pe-form-field__label label-text"
                    >
                      Description
                    </label>

                    <textarea
                      name="description"
                      id="edu-description"
                      class="ember-text-area pe-form-field__textarea ember-view"
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>

        <div class="modal fade" id="skills" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Skills</h4>
              </div>
              <div class="modal-body">
                <div class="type-ahead-input">
                  <label for="a11y-ember3230" class="visually-hidden">
                    Skill (ex: Data Analysis)
                  </label>
                  <input
                    aria-autocomplete="list"
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="Skill (ex: Data Analysis)"
                    autocorrect="off"
                    autocapitalize="off"
                    id="a11y-ember3230"
                    class="ember-text-field ember-view"
                    role="combobox"
                    aria-expanded="false"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="resume" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Upload resume</h4>
              </div>
              <div class="modal-body">
                <div class="type-ahead-input">
                  <label for="a11y-ember3230" class="visually-hidden">
                    Resume
                  </label>
                  <input class="ember-text-field ember-view" type="file" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                >
                  Upload
                </button>
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
    username: state.username
  };
};

const mapDispatchStateToProps = dispatch => {
  return {
    onSummaryHandle: data => {
      console.log(data);
      axios.post("http://localhost:3001/insertsummary", data).then(response => {
        dispatch({
          type: "BOOK",
          payload: response.data.updatedList,
          statusCode: response.status
        });
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(Homepage);
