import React, {Component} from 'react';
import '../../css/homepage.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';

import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

//Define a Login Component
class Homepage extends Component
{
    //call the constructor method
    constructor(props)
    {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        // this.state = {
        //     firstname : "",
        //     lastname:"",
        //     username:"",
        //     password : ""
        // }
        //Bind the handlers to this class
        // this.firstnameChangeHandler = this.firstnameChangeHandler.bind(this);
        // this.lastnameChangeHandler = this.lastnameChangeHandler.bind(this);
        //  this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        // this.submitLogin = this.submitLogin.bind(this);
    }
    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
    }
    // deleteAccount(e) {
    //   $("#myModal").modal("show");
    // }
    
    //username change handler to update state variable with the text entered by the user
    // firstnameChangeHandler = (e) => {
    //     this.setState({
    //         firstname : e.target.value
    //     })
    // }

    // lastnameChangeHandler = (e) => {
    //     this.setState({
    //         lastname : e.target.value
    //     })
    // }

    // usernameChangeHandler = (e) => {
    //     this.setState({
    //         username : e.target.value
    //     })
    // }
    // // //password change handler to update state variable with the text entered by the user
    // passwordChangeHandler = (e) => {
    //     this.setState({
    //         password : e.target.value
    //     })
    // }
    // // //submit Login handler to send a request to the node backend
    // submitLogin = (e) => {
    //     var headers = new Headers();
    //     //prevent page from refresh
    //     e.preventDefault();
    //     const data = {
    //         email:this.state.username,
    //         password : this.state.password
    //     }
    //     //set the with credentials to true
    //     axios.defaults.withCredentials = true;
    //     this.props.onSubmitHandle(data);
    // }
    render()
    {
        // let redirect = null;
        // if(this.props.authFlag){
        //     redirect = <Redirect to= "/homepage"/>
        // }
        //redirect based on successful login
        // let redirectVar = null;
        // if(cookie.load('cookie')){
        //     redirectVar = <Redirect to= "/home"/>
        // }
        return(  
                <div class="container">
                <body dir="ltr" class="render-mode-BIGPIPE nav-v2 ember-application boot-complete icons-loaded" data-t-link-to-event-attached="true">
                    <nav class="extended-nav nav-main-container global-alert-offset-top is-loading-nav" role="banner" tabIndex="1" style={{'display':'block'}} >
                        <div class="nav-main__content full-height display-flex align-items-center" style={{'background':'#283e4a'}}>
                            <div class="nav-main__inbug-container fl mr3">
                            <div id="inbug-nav-item" class="nav-item--inbug" lang="en"><a href="/feed/" data-alias="" data-link-to="feed" data-resource="feed/badge" data-control-name="" class="nav-item__link js-nav-item-link"><span class="nav-item__icon nav-item__icon--inbug" lang="en" ><li-icon aria-hidden="true" type="linkedin-bug" size="34dp" color="brand"><svg preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg"><g class="scaling-icon" style={{'fillOpacity':'1'}}><defs></defs><g class="bug-14dp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g class="dp-1"><path d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25" class="bug-text-color" fill="#FFFFFF"></path><path d="M14,1.25 L14,12.75 C14,13.44 13.44,14 12.75,14 L1.25,14 C0.56,14 0,13.44 0,12.75 L0,1.25 C0,0.56 0.56,0 1.25,0 L12.75,0 C13.44,0 14,0.56 14,1.25 Z M5,5 L6.85,5 L6.85,6.016 L6.893,6.016 C7.259,5.541 8.018,4.938 9.25,4.938 C11.125,4.938 12,5.808 12,8 L12,12 L10,12 L10,8.75 C10,7.313 9.672,6.875 8.632,6.875 C7.5,6.875 7,7.75 7,9 L7,12 L5,12 L5,5 Z M2,12 L4,12 L4,5 L2,5 L2,12 Z M4.335,3 C4.335,3.737 3.737,4.335 3,4.335 C2.263,4.335 1.665,3.737 1.665,3 C1.665,2.263 2.263,1.665 3,1.665 C3.737,1.665 4.335,2.263 4.335,3 Z" class="background" fill="#0073B2"></path></g><g class="dpi-gt1" transform="scale(0.2917)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="52" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-21dp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g class="dp-1"><path d="M19.479,0 L1.583,0 C0.728,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.478,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0" class="bug-text-color" fill="#FFFFFF"></path><path d="M19.479,0 L1.583,0 C0.728,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.478,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0 Z M8,8 L10.827,8 L10.827,9.441 L10.858,9.441 C11.289,8.664 12.562,7.875 14.136,7.875 C17.157,7.875 18,9.479 18,12.45 L18,18 L15,18 L15,12.997 C15,11.667 14.469,10.5 13.227,10.5 C11.719,10.5 11,11.521 11,13.197 L11,18 L8,18 L8,8 Z M3,18 L6,18 L6,8 L3,8 L3,18 Z M6.375,4.5 C6.375,5.536 5.536,6.375 4.5,6.375 C3.464,6.375 2.625,5.536 2.625,4.5 C2.625,3.464 3.464,2.625 4.5,2.625 C5.536,2.625 6.375,3.464 6.375,4.5 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.4375)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="52" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-28dp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g class="dp-1"><path d="M25.375,0 L2.625,0 C1.175,0 0,1.175 0,2.625 L0,25.375 C0,26.825 1.175,28 2.625,28 L25.375,28 C26.825,28 28,26.825 28,25.375 L28,2.625 C28,1.175 26.825,0 25.375,0" class="bug-text-color" fill="#FFFFFF"></path><path d="M25.375,0 L2.625,0 C1.175,0 0,1.175 0,2.625 L0,25.375 C0,26.825 1.175,28 2.625,28 L25.375,28 C26.825,28 28,26.825 28,25.375 L28,2.625 C28,1.175 26.825,0 25.375,0 Z M14.8747,12.025 L14.8747,10 L10.9997,10 L10.9997,24 L14.9997,24 L14.9997,17.375 C14.9997,15.603 15.6627,13.875 17.6497,13.875 C19.4667,13.875 19.9997,14.965 19.9997,16.875 L19.9997,24 L23.9997,24 L23.9997,14.975 C23.9997,11.75 22.2917,9.875 19.0137,9.875 C16.9227,9.875 15.4487,11.025 14.8747,12.025 Z M4,24 L8,24 L8,10 L4,10 L4,24 Z M6,3.665 C4.71,3.665 3.665,4.71 3.665,6 C3.665,7.29 4.71,8.335 6,8.335 C7.29,8.335 8.335,7.29 8.335,6 C8.335,4.71 7.29,3.665 6,3.665 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.5833)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="52" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-34dp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g class="dp-1"><path d="M2.8,34 L31.2,34 C32.746,34 34,32.746 34,31.2 L34,2.8 C34,1.254 32.746,0 31.2,0 L2.8,0 C1.254,0 0,1.254 0,2.8 L0,31.2 C0,32.746 1.254,34 2.8,34" class="bug-text-color" fill="#FFFFFF"></path><path d="M2.8,34 L31.2,34 C32.746,34 34,32.746 34,31.2 L34,2.8 C34,1.254 32.746,0 31.2,0 L2.8,0 C1.254,0 0,1.254 0,2.8 L0,31.2 C0,32.746 1.254,34 2.8,34 Z M13,13 L17.75,13 L17.75,15.391 C18.387,14.114 20.242,12.75 22.695,12.75 C27.397,12.75 29,14.875 29,19.922 L29,29 L24,29 L24,20.984 C24,18.328 23.481,16.875 21.542,16.875 C18.921,16.875 18,18.867 18,20.984 L18,29 L13,29 L13,13 Z M5,29 L10,29 L10,13 L5,13 L5,29 Z M10.55,7.5 C10.55,9.184 9.184,10.55 7.5,10.55 C5.816,10.55 4.45,9.184 4.45,7.5 C4.45,5.815 5.816,4.45 7.5,4.45 C9.184,4.45 10.55,5.815 10.55,7.5 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.7083)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="52" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-40dp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g class="dp-1"><path d="M40,3.5 L40,36.5 C40,38.434 38.434,40 36.5,40 L3.5,40 C1.566,40 0,38.434 0,36.5 L0,3.5 C0,1.566 1.566,0 3.5,0 L36.5,0 C38.434,0 40,1.566 40,3.5 L40,3.5 Z" class="bug-text-color" fill="#FFFFFF"></path><path d="M40,3.5 L40,36.5 C40,38.434 38.434,40 36.5,40 L3.5,40 C1.566,40 0,38.434 0,36.5 L0,3.5 C0,1.566 1.566,0 3.5,0 L36.5,0 C38.434,0 40,1.566 40,3.5 Z M15,15.0000122 L20.875,15.0000122 L20.875,18.3330122 C21.542,17.1460122 23,14.7000122 26.957,14.7000122 C33.137,14.7000122 34,18.6800122 34,23.9670122 L34,34.0000122 L28,34.0000122 L28,25.0180122 C28,22.1830122 27.542,19.8750122 24.922,19.8750122 C21.75,19.8750122 21,21.9560122 21,24.5160122 L21,34.0000122 L15,34.0000122 L15,15.0000122 Z M6,34 L12,34 L12,15 L6,15 L6,34 Z M12.6509756,8.99997559 C12.6509756,11.0159756 11.0169756,12.6499756 9.00097559,12.6499756 C6.98397559,12.6499756 5.34997559,11.0159756 5.34997559,8.99997559 C5.34997559,6.98397559 6.98397559,5.34997559 9.00097559,5.34997559 C11.0169756,5.34997559 12.6509756,6.98397559 12.6509756,8.99997559 Z" class="background" fill="#0077B5"></path></g><g class="dpi-gt1" transform="scale(0.8333)"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="52" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g><g class="bug-48dp" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect class="bug-text-color" fill="#FFFFFF" x="1" y="1" width="46" height="52" rx="4"></rect><path d="M0,4.00989318 C0,1.79529033 1.79405245,0 4.00989318,0 L43.9901068,0 C46.2047097,0 48,1.79405245 48,4.00989318 L48,43.9901068 C48,46.2047097 46.2059475,48 43.9901068,48 L4.00989318,48 C1.79529033,48 0,46.2059475 0,43.9901068 L0,4.00989318 Z M19,18.3 L25.5,18.3 L25.5,21.566 C26.437,19.688 28.838,18 32.445,18 C39.359,18 41,21.738 41,28.597 L41,41.3 L34,41.3 L34,30.159 C34,26.253 33.063,24.05 30.68,24.05 C27.375,24.05 26,26.425 26,30.159 L26,41.3 L19,41.3 L19,18.3 Z M7,41 L14,41 L14,18 L7,18 L7,41 Z M15,10.5 C15,12.985 12.985,15 10.5,15 C8.015,15 6,12.985 6,10.5 C6,8.015 8.015,6 10.5,6 C12.985,6 15,8.015 15,10.5 Z" class="background" fill="#0077B5"></path></g></g></svg></li-icon></span> <span class="nav-item__title"></span></a></div>
                            <div id="china-branding-nav-item" class="nav-item--inbug nav-item--china-branding hidden" lang="en"><a href="/feed/" data-alias="" data-link-to="feed" data-control-name="nav.homepage-zh_CN" class="nav-item__link js-nav-item-link"><span class="nav-item__china-logo" ><span class="visually-hidden">LinkedIn领英</span></span></a></div>

                            <form id="extended-nav-search" class="nav-search"><div class="nav-search-bar"><div id="nav-typeahead-wormhole">    <div class="nav-search-typeahead">
<artdeco-typeahead-deprecated id="nav-search-artdeco-typeahead" class="search-typeahead-v2 ember-view"><div class="artdeco-typeahead-deprecated-live-region" aria-live="polite">
    No suggestions found
</div>

<artdeco-typeahead-deprecated-input id="ember42" class="ember-view">
<input role="combobox" autoComplete="off" spellCheck="false" aria-autocomplete="list" aria-owns="nav-search-artdeco-typeahead-results" aria-expanded="false" placeholder="Search" type="text" />
</artdeco-typeahead-deprecated-input>
</artdeco-typeahead-deprecated>
      <div id="nav-search-controls-wormhole" class="nav-search-controls">
        <button class="search-typeahead-v2__button typeahead-icon" tabIndex="-1" data-control-name="nav.search_button" data-ember-action="" data-ember-action-43="43">
          <span class="svg-icon-wrap"><span class="visually-hidden">Search</span><li-icon aria-hidden="true" type="search-icon" size="medium"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,19.67l-5.44-5.44a7,7,0,1,0-1.33,1.33L19.67,21ZM10,15.13A5.13,5.13,0,1,1,15.13,10,5.13,5.13,0,0,1,10,15.13Z" class="large-icon" style={{'fill': 'currentColor'}}></path></svg></li-icon></span>
        </button>
      </div>
    </div>
</div></div></form>

<ul class="nav-main nav-container display-flex full-height" role="navigation" aria-label="Primary"><li id="feed-nav-item" class="nav-item nav-item--feed" lang="en"><a href="/feed/" data-alias="" data-link-to="feed" data-resource="feed/badge" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link"><span id="feed-tab-icon" class="nav-item__icon" lang="en"><li-icon aria-hidden="true" type="nav-small-home-icon" color="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z" class="active-item" style={{'fillOpacity':'1'}}></path><path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" class="inactive-item" style={{'fill': 'currentColor'}}></path></svg></li-icon></span> <span class="nav-item__title">Home</span></a></li><li id="mynetwork-nav-item" class="nav-item nav-item--mynetwork" lang="en"><a href="/mynetwork/" data-alias="relationships" data-link-to="mynetwork" data-resource="voyagerCommunicationsTabBadges" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link"><span id="mynetwork-tab-icon" class="nav-item__icon" lang="en" ><li-icon aria-hidden="true" type="nav-small-people-icon" color="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z" class="active-item" ></path><path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" class="inactive-item" ></path></svg></li-icon></span> <span class="nav-item__title">My Network</span></a></li><li id="jobs-nav-item" class="nav-item nav-item--jobs" lang="en"><a href="/jobs/" data-alias="" data-link-to="jobs" data-resource="" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link"><span id="jobs-tab-icon" class="nav-item__icon" lang="en"><li-icon aria-hidden="true" type="nav-small-jobs-icon" color="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z" class="active-item" ></path><path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" class="inactive-item" ></path></svg></li-icon></span> <span class="nav-item__title">Jobs</span></a></li><li id="messaging-nav-item" class="nav-item nav-item--messaging" lang="en"><a href="/messaging/" data-alias="" data-link-to="messaging" data-resource="voyagerCommunicationsTabBadges" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link"><span id="messaging-tab-icon" class="nav-item__icon" lang="en"><li-icon aria-hidden="true" type="nav-small-messaging-icon" color="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z" class="active-item" ></path><path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" class="inactive-item" s></path></svg></li-icon></span> <span class="nav-item__title">Messaging</span></a></li><li id="notifications-nav-item" class="nav-item nav-item--notifications" lang="en"><a href="/notifications/" data-alias="identity" data-link-to="notifications" data-resource="voyagerCommunicationsTabBadges" data-control-name="" class="nav-item__link nav-item__link--underline js-nav-item-link"><span id="notifications-tab-icon" class="nav-item__icon" lang="en"><li-icon aria-hidden="true" type="nav-small-notifications-icon" color="true"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg"><path d="M18.94,14H5.06L5.79,8.44A6.26,6.26,0,0,1,12,3h0a6.26,6.26,0,0,1,6.21,5.44Zm2,5-1.71-4H4.78L3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19Z" class="active-item" style={{'fillOpacity':'1'}}></path><path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" class="inactive-item" style={{'fill': 'currentColor'}}></path></svg></li-icon></span> <span class="nav-item__title">Notifications</span></a><div id="push-permission-wormhole" class="relative"></div></li><li id="profile-nav-item" class="nav-item nav-item--profile" lang="en">    <div id="nav-settings__dropdown" class="dropdown closed ember-view"><button data-control-name="nav.settings" aria-controls="nav-settings__dropdown-options" aria-expanded="false" id="nav-settings__dropdown-trigger" class="t-14 t-black--light t-bold nav-item__link dropdown-trigger ember-view" type="button">    <img src="https://media.licdn.com/dms/image/C5603AQEH-6I5DeJm1Q/profile-displayphoto-shrink_100_100/0?e=1548288000&amp;v=beta&amp;t=JSRyttsJq4ul_VtXbROhO8Td3qgsoKSnSkn6md6mrXE" class="nav-item__profile-member-photo nav-item__icon" alt="Kesha Shah" height="24" width="24" />
    <div class="nav-item__title-container">
      <span class="nav-item__title nav-item__dropdown-trigger--title">Me</span>
      <span class="nav-item__dropdown-trigger--icon svg-icon-wrap"><li-icon aria-hidden="true" type="caret-filled-down-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M8.8,10.66L14,5.12A0.07,0.07,0,0,0,13.93,5H2.07A0.07,0.07,0,0,0,2,5.12L7.2,10.66A1.1,1.1,0,0,0,8.8,10.66Z" class="small-icon" style={{'fillOpacity': '1'}}></path></svg></li-icon></span>
    </div>
</button>
<ul id="nav-settings__dropdown-options" class="dropdown-options nav-settings__dropdown-options ember-view" style={{'display': 'none'}} tabIndex="-1"></ul>
</div>
</li></ul>
<ul class="nav-side nav-container full-height" role="navigation" aria-label="Secondary" style={{'align-items':'right'}}>
<li id="app-launcher-nav-item" class="nav-item nav-item--app-launcher" style={{'margin-left':'1100px'}}><div id="ember33" class="ember-view"><button class="nav-item__link nav-panel__trigger " data-control-name="nav.launcher" data-ember-action="" data-ember-action-34="34">
  <span class="nav-item__icon svg-icon-wrap"><span class="visually-hidden">Work icon</span><li-icon aria-hidden="true" type="grid-icon"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z" class="large-icon" style={{'fill': 'currentColor'}}></path></svg></li-icon></span>
  <div class="nav-item__title-container">
    <span class="nav-item__title nav-item__dropdown-trigger--title">Work</span>
    <span class="nav-item__dropdown-trigger--icon svg-icon-wrap"><li-icon aria-hidden="true" type="caret-filled-down-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M8.8,10.66L14,5.12A0.07,0.07,0,0,0,13.93,5H2.07A0.07,0.07,0,0,0,2,5.12L7.2,10.66A1.1,1.1,0,0,0,8.8,10.66Z" class="small-icon" style={{'fillOpacity': '1'}}></path></svg></li-icon></span>
  </div>
</button>

<div id="ember35" class="ember-view"></div></div></li><li id="spotlight-one-nav-item" class="nav-item nav-item--spotlight-one nav-item__spotlight">
  <div>
      
    <div id="ember30" class="t-14 t-black t-normal premium-upsell-link ember-view">
<a data-control-name="premium_nav_upsell_text_click" title="Start 1 Month Premium Trial" href="/premium/products/?destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fonboarding%2F%3FshowPremiumWelcomeBanner%3Dtrue&amp;upsellOrderOrigin=premium_nav_upsell_text" id="ember31" class="link-without-visited-state nav-item__spotlight-upsell  ember-view" >Start 1 Month Premium Trial</a></div>
  
  </div>
</li></ul>
                            </div>
                        </div>
                    </nav>
                  
                   
                    <div class="pv-content profile-view-grid neptune-grid two-column ghost-animate-in ">
        <section id="ember1102" class="pv-ad-banner--light ad-banner-container is-header-zone ember-view"><iframe class="ad-banner" width="100%" height="17" src="about:blank" scrolling="no" title="advertisement"></iframe>

</section>

        <div class="core-rail" role="main">
              <div id="ember1103" class="Elevation-2dp profile-background-image profile-background-image--loading ember-view"></div>
  
  <div id="ember1104" class="ember-view"><section id="ember1105" class="pv-profile-section pv-top-card-section artdeco-container-card ember-view">  

<div class="pv-top-card-section__profile-photo-container pv-top-card-v2-section__profile-photo-container">
  <div class="pv-top-card-section__photo-wrapper pv-top-card-v2-section__photo-wrapper">
     
      <div id="ember1109" class="pv-top-card-section__edit-photo pv-top-card-v2-section__edit-photo profile-photo-edit ember-view">  <button data-control-name="edit_profile_photo" class="profile-photo-edit__edit-btn" data-ember-action="" data-ember-action-1110="1110">
      <img src="https://media.licdn.com/dms/image/C5603AQHVVPM_Y5GT8w/profile-displayphoto-shrink_200_200/0?e=1548892800&amp;v=beta&amp;t=ft0HBIT7DODYrcap2naj-e5JB_NqcRwEBFO5eLAPZ0U" class="profile-photo-edit__preview" alt="Edit photo" height="128" width="128" />
    <span class="profile-photo-edit__edit-icon svg-icon-wrap"><li-icon aria-hidden="true" type="pencil-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M14.71,4L12,1.29a1,1,0,0,0-1.41,0L3,8.85,1,15l6.15-2,7.55-7.55A1,1,0,0,0,15,4.71,1,1,0,0,0,14.71,4Zm-8.84,7.6-1.5-1.5L9.42,5.07l1.5,1.5Zm5.72-5.72-1.5-1.5,1.17-1.17,1.5,1.5Z" class="small-icon" ></path></svg></li-icon></span>
  </button>
</div>


  </div>
</div>

<div class="pv-top-card-v2-section__meta-info display-flex">
    <span id="ember1111" style={{'display': 'none'}} class="pv-member-badge--for-top-card-v2 pv-member-badge ember-view">
<span class="visually-hidden">
  Kesha has a  account
</span>

</span>

    <a data-control-name="edit_top_card" href="/in/kesha-shah-2925b2135/edit/topcard/" id="ember1113" class="pv-top-card-section__edit button-tertiary-medium-round ember-view">    <span class="svg-icon-wrap"><span class="visually-hidden">Edit Profile</span><li-icon aria-hidden="true" type="pencil-icon"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21.71,5L19,2.29a1,1,0,0,0-1.41,0L4,15.85,2,22l6.15-2L21.71,6.45A1,1,0,0,0,22,5.71,1,1,0,0,0,21.71,5ZM6.87,18.64l-1.5-1.5L15.92,6.57l1.5,1.5ZM18.09,7.41l-1.5-1.5,1.67-1.67,1.5,1.5Z" class="large-icon" style={{'fill': 'currentColor'}}></path></svg></li-icon></span>
</a>
</div>


    <div id="ember1115" class="mt4 display-flex ember-view"><div class="pv-top-card-v2-section__info mr5">
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
    
      <section id="ember1116" class="pe-hub-section mb2 ember-view">
      
      <div class="dropdown">
  <button class="dropbtn">Add Profile Section</button>
  <div class="dropdown-content">
    <a data-toggle="modal" href="#summary">Summary</a>
    <a data-toggle="modal" href="#myModal">Work Experience</a>
    <a data-toggle="modal" href="#myModal">Education</a>
    <a data-toggle="modal" href="#myModal">Skills</a>
  </div>
</div>

</section>

      <span id="ember1120" class="pv-s-profile-actions__overflow ember-view"><button aria-label="More actions" aria-expanded="false" id="ember1187" class="pv-s-profile-actions__overflow-toggle  button-secondary-large-muted mh1 ml2 artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view">
<span class="artdeco-button__text t-33">
          More…

</span></button>
</span>
    </div>

    </div>
</div>
<div class="pv-top-card-v2-section__links">

    <button href="#education-section" data-control-name="education_see_more" class="pv-top-card-v2-section__link pv-top-card-v2-section__link-education mb1" data-ember-action="" data-ember-action-1122="1122">
        <span id="ember1124" class="pv-top-card-v2-section__entity-name pv-top-card-v2-section__school-name text-align-left ml2 t-33 t-black t-bold lt-line-clamp lt-line-clamp--multi-line ember-view" style={{'-webkit-line-clamp': '2'}}>  San Jose State University

</span>

    </button>

<a data-control-name="contact_see_more" href="/in/kesha-shah-2925b2135/detail/contact-info/" id="ember1125" class="pv-top-card-v2-section__link pv-top-card-v2-section__link--contact-info mb1 ember-view">    <span class="svg-icon-wrap"><span class="visually-hidden">See contact info</span><li-icon aria-hidden="true" type="address-book-icon" class="pv-top-card-v2-section__icon mh1" size="medium"><svg viewBox="0 0 24 24" width="24" height="24" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false"><path d="M16,15H10a3.24,3.24,0,0,1,1.79-2.89L12,12h2l0.21,0.11A3.24,3.24,0,0,1,16,15ZM13,8h0a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2h0A2,2,0,0,0,13,8Zm8-4V20a2,2,0,0,1-2,2H5V19H3V17H5V13H3V11H5V7H3V5H5V2H19A2,2,0,0,1,21,4ZM19,4H7V20H19V4Z" class="large-icon" style={{'fill': 'currentColor'}}></path></svg></li-icon></span>
    <span class="pv-top-card-v2-section__entity-name pv-top-card-v2-section__contact-info ml2 t-33 t-black t-bold">
      See contact info
    </span>
</a>
<a data-control-name="topcard_view_all_connections" href="/search/results/people/?facetNetwork=%5B%22F%22%5D&amp;origin=MEMBER_PROFILE_CANNED_SEARCH" id="ember1126" class="pv-top-card-v2-section__link pv-top-card-v2-section__link--connections ember-view">        <span class="svg-icon-wrap"><span class="visually-hidden">See connections (152)</span><li-icon aria-hidden="true" type="people-icon" class="pv-top-card-v2-section__icon mh1"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" class="large-icon" style={{'fill':'currentColor'}}></path></svg></li-icon></span>
        <span class="pv-top-card-v2-section__entity-name pv-top-card-v2-section__connections ml2 t-33 t-black t-bold">
          See connections (152)
        </span>
</a></div>
</div>


  <div id="ember1128" class="pv-top-card-section__summary ember-view">
    <div id="ember1129" class="pv-top-card-section__summary-treasury mt4 pv-treasury-list-preview ember-view"></div>
</div>
</section>
</div>

        </div>
        <div class="pv-content__right-rail right-rail">
        <div id="ember8838" class="pv-profile-info-section mb4 ember-view">
        <div id="ember8839" class="pv-view-public-profile-section pv-profile-info-section-button relative ember-view"><a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" id="ember8840" class="pv-view-public-profile-section__button pv-profile-info-section-button__button ember-view">  <span class="t-33 t-black--light t-bold">Edit public profile &amp; URL</span>
        </a>
        <li-icon aria-hidden="true" type="question-pebble-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M7,10h2v2H7V10zM15,8c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-3.9,3.1-7,7-7S15,4.1,15,8zM13.2,8c0-2.9-2.3-5.2-5.2-5.2S2.8,5.1,2.8,8c0,2.9,2.3,5.2,5.2,5.2S13.2,10.9,13.2,8zM8.5,4h-1C6.1,4,5,5.1,5,6.5V7h1.9V5.9h2.3v1.3H8c-0.6,0-1,0.4-1,1V9h1.5C9.9,9,11,7.9,11,6.5C11,5.1,9.9,4,8.5,4z" class="small-icon" ></path></svg></li-icon>
        </div>
        
          <hr class="divider mt4 mb4"></hr>
          <div id="ember8842" class="mt2 pv-add-secondary-language-section pv-profile-info-section-button relative ember-view"><a data-control-name="add_secondary_language" href="/in/kesha-shah-2925b2135/edit/secondary-language/" id="ember8843" class="pv-add-secondary-language-section__button pv-profile-info-section-button__button ember-view">  <span class="t-33 t-black--light t-bold">Add profile in another language</span>
          
        </a>
        <li-icon aria-hidden="true" type="question-pebble-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M7,10h2v2H7V10zM15,8c0,3.9-3.1,7-7,7s-7-3.1-7-7c0-3.9,3.1-7,7-7S15,4.1,15,8zM13.2,8c0-2.9-2.3-5.2-5.2-5.2S2.8,5.1,2.8,8c0,2.9,2.3,5.2,5.2,5.2S13.2,10.9,13.2,8zM8.5,4h-1C6.1,4,5,5.1,5,6.5V7h1.9V5.9h2.3v1.3H8c-0.6,0-1,0.4-1,1V9h1.5C9.9,9,11,7.9,11,6.5C11,5.1,9.9,4,8.5,4z" class="small-icon" ></path></svg></li-icon>
        <div id="ember8844" class="pv-add-secondary-language-section__button-icon pv-profile-info-section-button__button-icon ember-view"><div class="hovercard-container">
           
        </div>
        </div></div>
        </div>
        </div>
        
        <div class="sidebarad">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="box">

        </div></div>
        
        </div>
        
        
        <div class="profilestrength">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div class="box">

        </div></div>
        
        </div>
        </div>
        <div id="summary" class="modal fade" role="dialog" >
  <div class="modal-dialog">

    
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Intro</h4>
      </div>
      <div class="modal-body">
      <div id="ember3308" class="carousel-body ember-view"><div id="ember3309" class="carousel-item focused-easeInOut-motion carousel-item--show ember-view">  <div id="ember3310" class="form-edit ember-view">        <form class="pe-form  pe-top-card-form" data-ember-action="" data-ember-action-3312="3312">
      <div class="pe-s-form__container">
       

        <div class="pe-s-form__body pe-form-body pe-form-body--align-top">
          <div class="pe-top-card-form__background-image-container relative">
              <div id="ember3316" class="profile-background-image--no-rounded-corners profile-background-image profile-background-image--loading ember-view"></div>
            
            
          </div>
    
          <div class="pe-form-body__content">
            <div class="pe-form-body_top-area relative display-flex">
           </div>
    
            <div class="pe-form-field pe-top-card-form__photo-field pe-top-card-form__photo-field--floating pe-top-card-form__photo-wrapper pe-top-card-v2-form__photo-wrapper EntityPhoto-circle-8">
              <div id="ember3318" class="pe-top-card-form__photo profile-photo-edit--large-preview profile-photo-edit ember-view">  <button data-control-name="edit_profile_photo" class="profile-photo-edit__edit-btn" data-ember-action="" data-ember-action-3319="3319">
          <img src="https://media.licdn.com/dms/image/C5603AQHVVPM_Y5GT8w/profile-displayphoto-shrink_200_200/0?e=1548892800&amp;v=beta&amp;t=ft0HBIT7DODYrcap2naj-e5JB_NqcRwEBFO5eLAPZ0U" class="profile-photo-edit__preview" alt="Edit photo" height="152" width="152" />
        <span class="profile-photo-edit__edit-icon profile-photo-edit__edit-icon--for-top-card-v2 svg-icon-wrap"><li-icon aria-hidden="true" type="pencil-icon" size="small"><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M14.71,4L12,1.29a1,1,0,0,0-1.41,0L3,8.85,1,15l6.15-2,7.55-7.55A1,1,0,0,0,15,4.71,1,1,0,0,0,14.71,4Zm-8.84,7.6-1.5-1.5L9.42,5.07l1.5,1.5Zm5.72-5.72-1.5-1.5,1.17-1.17,1.5,1.5Z" class="small-icon" ></path></svg></li-icon></span>
      </button>
    </div>
            </div>
    
            <div class="pe-s-multi-field">
                <div class="pe-top-card-form__name-field">
                  <div class="pe-s-multi-field__item pe-form-field pe-top-card-form__first-name-field floating-label  " data-form-elem-focus="true">
     <label for="topcard-firstname" class="pe-form-field__label label-text required">
        First Name
      </label>
    
      <input name="firstName" maxlength="20" id="topcard-firstname" class="ember-text-field pe-form-field__text-input ember-view" type="text" />
    
    </div>
    
               </div>
                <div class="pe-top-card-form__name-field">
                  <div class="pe-s-multi-field__item pe-form-field pe-top-card-form__last-name-field floating-label  " data-form-elem-focus="true">
    <label for="topcard-lastname" class="pe-form-field__label label-text required">
        Last Name
      </label>
    
      <input name="lastName" maxlength="40" id="topcard-lastname" class="ember-text-field pe-form-field__text-input ember-view" type="text" />
    
    </div>
    
               </div>
            </div>
    
              
    
    
            <div class="pe-form-field pe-top-card-form__headline-field floating-label  " data-form-elem-focus="true">
     <label for="topcard-headline" class="pe-form-field__label label-text required">
        Headline
      </label>
    
      <textarea name="headline" id="topcard-headline" class="pe-top-card-form__headline-text ember-text-area pe-form-field__textarea ember-view"></textarea>
    </div>  
            <div id="ember3332" class="pe-form-field pe-top-card-form__location-picker ember-view"><div class="pe-s-multi-field">
      <div class="pe-s-multi-field__item pe-form-field ">
        <label class="pe-form-field__label required" for="location-country">
          Country/Region
        </label>
    
    <div id="ember3333" class="pe-secondary-locale-tooltip-trigger ember-view">        <select data-control-name="location_country_chooser" name="locationCountry" id="location-country" class="ember-view">
      <option value="us">United States</option>
      <option value="af">Afghanistan</option>
      <option value="ax">Aland Islands</option>
      <option value="al">Albania</option>
      <option value="dz">Algeria</option>
      <option value="as">American Samoa</option>
      <option value="ad">Andorra</option>
      <option value="ao">Angola</option>
      <option value="ai">Anguilla</option>
      <option value="aq">Antarctica</option>
      <option value="ag">Antigua and Barbuda</option>
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
      <option value="ba">Bosnia and Herzegovina</option>
      <option value="bw">Botswana</option>
      <option value="bv">Bouvet Island</option>
      <option value="br">Brazil</option>
      <option value="io">British Indian Ocean Territory</option>
      <option value="bn">Brunei Darussalam</option>
      <option value="bg">Bulgaria</option>
      <option value="bf">Burkina Faso</option>
      <option value="bi">Burundi</option>
      <option value="kh">Cambodia</option>
      <option value="cm">Cameroon</option>
      <option value="ca">Canada</option>
      <option value="cv">Cape Verde</option>
      <option value="cb">Caribbean Nations</option>
      <option value="ky">Cayman Islands</option>
      <option value="cf">Central African Republic</option>
      <option value="td">Chad</option>
      <option value="cl">Chile</option>
      <option value="cn">China</option>
      <option value="cx">Christmas Island</option>
      <option value="cc">Cocos (Keeling) Islands</option>
      <option value="co">Colombia</option>
      <option value="km">Comoros</option>
      <option value="cg">Congo</option>
      <option value="ck">Cook Islands</option>
      <option value="cr">Costa Rica</option>
      <option value="ci">Cote D’Ivoire (Ivory Coast)</option>
      <option value="hr">Croatia</option>
      <option value="cu">Cuba</option>
      <option value="cy">Cyprus</option>
      <option value="cz">Czech Republic</option>
      <option value="cd">Democratic Republic of the Congo</option>
      <option value="dk">Denmark</option>
      <option value="dj">Djibouti</option>
      <option value="dm">Dominica</option>
      <option value="do">Dominican Republic</option>
      <option value="ec">Ecuador</option>
      <option value="eg">Egypt</option>
      <option value="sv">El Salvador</option>
      <option value="gq">Equatorial Guinea</option>
      <option value="er">Eritrea</option>
      <option value="ee">Estonia</option>
      <option value="et">Ethiopia</option>
      <option value="fk">Falkland Islands (Malvinas)</option>
      <option value="fo">Faroe Islands</option>
      <option value="fm">Federated States of Micronesia</option>
      <option value="fj">Fiji</option>
      <option value="fi">Finland</option>
      <option value="fr">France</option>
      <option value="gf">French Guiana</option>
      <option value="pf">French Polynesia</option>
      <option value="tf">French Southern Territories</option>
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
      <option value="gw">Guinea-Bissau</option>
      <option value="gy">Guyana</option>
      <option value="ht">Haiti</option>
      <option value="hm">Heard Island and McDonald Islands</option>
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
      <option value="kp">Korea (North)</option>
      <option value="ko">Kosovo</option>
      <option value="kw">Kuwait</option>
      <option value="kg">Kyrgyzstan</option>
      <option value="la">Laos</option>
      <option value="lv">Latvia</option>
      <option value="lb">Lebanon</option>
      <option value="ls">Lesotho</option>
      <option value="lr">Liberia</option>
      <option value="ly">Libya</option>
      <option value="li">Liechtenstein</option>
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
      <option value="mh">Marshall Islands</option>
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
      <option value="an">Netherlands Antilles</option>
      <option value="nc">New Caledonia</option>
      <option value="nz">New Zealand</option>
      <option value="ni">Nicaragua</option>
      <option value="ne">Niger</option>
      <option value="ng">Nigeria</option>
      <option value="nu">Niue</option>
      <option value="nf">Norfolk Island</option>
      <option value="mp">Northern Mariana Islands</option>
      <option value="no">Norway</option>
      <option value="pk">Pakistan</option>
      <option value="pw">Palau</option>
      <option value="ps">Palestinian Territory</option>
      <option value="pa">Panama</option>
      <option value="pg">Papua New Guinea</option>
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
      <option value="ru">Russian Federation</option>
      <option value="rw">Rwanda</option>
      <option value="gs">S. Georgia and S. Sandwich Islands</option>
      <option value="sh">Saint Helena</option>
      <option value="kn">Saint Kitts and Nevis</option>
      <option value="lc">Saint Lucia</option>
      <option value="pm">Saint Pierre and Miquelon</option>
      <option value="vc">Saint Vincent and the Grenadines</option>
      <option value="ws">Samoa</option>
      <option value="sm">San Marino</option>
      <option value="st">Sao Tome and Principe</option>
      <option value="sa">Saudi Arabia</option>
      <option value="sn">Senegal</option>
      <option value="rs">Serbia</option>
      <option value="cs">Serbia and Montenegro</option>
      <option value="sc">Seychelles</option>
      <option value="sl">Sierra Leone</option>
      <option value="sg">Singapore</option>
      <option value="sk">Slovak Republic</option>
      <option value="si">Slovenia</option>
      <option value="sb">Solomon Islands</option>
      <option value="so">Somalia</option>
      <option value="za">South Africa</option>
      <option value="ss">South Sudan</option>
      <option value="es">Spain</option>
      <option value="lk">Sri Lanka</option>
      <option value="sd">Sudan</option>
      <option value="om">Sultanate of Oman</option>
      <option value="sr">Suriname</option>
      <option value="sj">Svalbard and Jan Mayen</option>
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
      <option value="tt">Trinidad and Tobago</option>
      <option value="tn">Tunisia</option>
      <option value="tr">Turkey</option>
      <option value="tm">Turkmenistan</option>
      <option value="tc">Turks and Caicos Islands</option>
      <option value="tv">Tuvalu</option>
      <option value="ug">Uganda</option>
      <option value="ua">Ukraine</option>
      <option value="ae">United Arab Emirates</option>
      <option value="gb">United Kingdom</option>
      <option value="uy">Uruguay</option>
      <option value="uz">Uzbekistan</option>
      <option value="vu">Vanuatu</option>
      <option value="va">Vatican City State (Holy See)</option>
      <option value="ve">Venezuela</option>
      <option value="vn">Vietnam</option>
      <option value="vg">Virgin Islands (British)</option>
      <option value="vi">Virgin Islands (U.S.)</option>
      <option value="wf">Wallis and Futuna</option>
      <option value="eh">Western Sahara</option>
      <option value="ye">Yemen</option>
      <option value="zm">Zambia</option>
      <option value="zw">Zimbabwe</option>
      <option value="oo">Other</option>
    </select>
    
    </div>
      </div>
    
        <div class="pe-s-multi-field__item pe-form-field floating-label zipcode-field
          " data-form-elem-focus="true">
          <label for="location-zipcode" class="pe-form-field__label label-text">ZIP code</label>
    <div id="ember3583" class="pe-secondary-locale-tooltip-trigger ember-view">          <div class="pe-location-picker__postal-code-input-container">
              <input name="zipcode" maxlength="8" id="location-zipcode" class="pe-form-field__location-zipcode ember-text-field ember-view" type="text" />
            </div>
    
    </div>
      </div>
    
    </div>
    
        <div class="pe-form-field ">
          <label class="pe-form-field__label" for="pe-location-picker__preferred-location">Locations within this area</label>
    
    <div id="ember3753" class="pe-secondary-locale-tooltip-trigger ember-view">       
    <input type="text" name="citystate" class="ember-view" />
    
    
    </div>
     </div>
   
    </div>
    
              <div class="pe-form-field industry-field">
      <label for="topcard-industry" class="pe-form-field__label required">
        Industry
      </label>
    
    <div id="ember3585" class="pe-secondary-locale-tooltip-trigger ember-view">      <select name="industry" id="topcard-industry" class="ember-view">  <option value="">Choose an industry…</option>
    
      <option value="urn:li:fs_industry:47">Accounting</option>
      <option value="urn:li:fs_industry:94">Airlines/Aviation</option>
      <option value="urn:li:fs_industry:120">Alternative Dispute Resolution</option>
      <option value="urn:li:fs_industry:125">Alternative Medicine</option>
      <option value="urn:li:fs_industry:127">Animation</option>
      <option value="urn:li:fs_industry:19">Apparel &amp; Fashion</option>
      <option value="urn:li:fs_industry:50">Architecture &amp; Planning</option>
      <option value="urn:li:fs_industry:111">Arts &amp; Crafts</option>
      <option value="urn:li:fs_industry:53">Automotive</option>
      <option value="urn:li:fs_industry:52">Aviation &amp; Aerospace</option>
      <option value="urn:li:fs_industry:41">Banking</option>
      <option value="urn:li:fs_industry:12">Biotechnology</option>
      <option value="urn:li:fs_industry:36">Broadcast Media</option>
      <option value="urn:li:fs_industry:49">Building Materials</option>
      <option value="urn:li:fs_industry:138">Business Supplies &amp; Equipment</option>
      <option value="urn:li:fs_industry:129">Capital Markets</option>
      <option value="urn:li:fs_industry:54">Chemicals</option>
      <option value="urn:li:fs_industry:90">Civic &amp; Social Organization</option>
      <option value="urn:li:fs_industry:51">Civil Engineering</option>
      <option value="urn:li:fs_industry:128">Commercial Real Estate</option>
      <option value="urn:li:fs_industry:118">Computer &amp; Network Security</option>
      <option value="urn:li:fs_industry:109">Computer Games</option>
      <option value="urn:li:fs_industry:3">Computer Hardware</option>
      <option value="urn:li:fs_industry:5">Computer Networking</option>
      <option value="urn:li:fs_industry:4">Computer Software</option>
      <option value="urn:li:fs_industry:48">Construction</option>
      <option value="urn:li:fs_industry:24">Consumer Electronics</option>
      <option value="urn:li:fs_industry:25">Consumer Goods</option>
      <option value="urn:li:fs_industry:91">Consumer Services</option>
      <option value="urn:li:fs_industry:18">Cosmetics</option>
      <option value="urn:li:fs_industry:65">Dairy</option>
      <option value="urn:li:fs_industry:1">Defense &amp; Space</option>
      <option value="urn:li:fs_industry:99">Design</option>
      <option value="urn:li:fs_industry:132">E-learning</option>
      <option value="urn:li:fs_industry:69">Education Management</option>
      <option value="urn:li:fs_industry:112">Electrical &amp; Electronic Manufacturing</option>
      <option value="urn:li:fs_industry:28">Entertainment</option>
      <option value="urn:li:fs_industry:86">Environmental Services</option>
      <option value="urn:li:fs_industry:110">Events Services</option>
      <option value="urn:li:fs_industry:76">Executive Office</option>
      <option value="urn:li:fs_industry:122">Facilities Services</option>
      <option value="urn:li:fs_industry:63">Farming</option>
      <option value="urn:li:fs_industry:43">Financial Services</option>
      <option value="urn:li:fs_industry:38">Fine Art</option>
      <option value="urn:li:fs_industry:66">Fishery</option>
      <option value="urn:li:fs_industry:34">Food &amp; Beverages</option>
      <option value="urn:li:fs_industry:23">Food Production</option>
      <option value="urn:li:fs_industry:101">Fundraising</option>
      <option value="urn:li:fs_industry:26">Furniture</option>
      <option value="urn:li:fs_industry:29">Gambling &amp; Casinos</option>
      <option value="urn:li:fs_industry:145">Glass, Ceramics &amp; Concrete</option>
      <option value="urn:li:fs_industry:75">Government Administration</option>
      <option value="urn:li:fs_industry:148">Government Relations</option>
      <option value="urn:li:fs_industry:140">Graphic Design</option>
      <option value="urn:li:fs_industry:124">Health, Wellness &amp; Fitness</option>
      <option value="urn:li:fs_industry:68">Higher Education</option>
      <option value="urn:li:fs_industry:14">Hospital &amp; Health Care</option>
      <option value="urn:li:fs_industry:31">Hospitality</option>
      <option value="urn:li:fs_industry:137">Human Resources</option>
      <option value="urn:li:fs_industry:134">Import &amp; Export</option>
      <option value="urn:li:fs_industry:88">Individual &amp; Family Services</option>
      <option value="urn:li:fs_industry:147">Industrial Automation</option>
      <option value="urn:li:fs_industry:84">Information Services</option>
      <option value="urn:li:fs_industry:96">Information Technology &amp; Services</option>
      <option value="urn:li:fs_industry:42">Insurance</option>
      <option value="urn:li:fs_industry:74">International Affairs</option>
      <option value="urn:li:fs_industry:141">International Trade &amp; Development</option>
      <option value="urn:li:fs_industry:6">Internet</option>
      <option value="urn:li:fs_industry:45">Investment Banking</option>
      <option value="urn:li:fs_industry:46">Investment Management</option>
      <option value="urn:li:fs_industry:73">Judiciary</option>
      <option value="urn:li:fs_industry:77">Law Enforcement</option>
      <option value="urn:li:fs_industry:9">Law Practice</option>
      <option value="urn:li:fs_industry:10">Legal Services</option>
      <option value="urn:li:fs_industry:72">Legislative Office</option>
      <option value="urn:li:fs_industry:30">Leisure, Travel &amp; Tourism</option>
      <option value="urn:li:fs_industry:85">Libraries</option>
      <option value="urn:li:fs_industry:116">Logistics &amp; Supply Chain</option>
      <option value="urn:li:fs_industry:143">Luxury Goods &amp; Jewelry</option>
      <option value="urn:li:fs_industry:55">Machinery</option>
      <option value="urn:li:fs_industry:11">Management Consulting</option>
      <option value="urn:li:fs_industry:95">Maritime</option>
      <option value="urn:li:fs_industry:97">Market Research</option>
      <option value="urn:li:fs_industry:80">Marketing &amp; Advertising</option>
      <option value="urn:li:fs_industry:135">Mechanical Or Industrial Engineering</option>
      <option value="urn:li:fs_industry:126">Media Production</option>
      <option value="urn:li:fs_industry:17">Medical Device</option>
      <option value="urn:li:fs_industry:13">Medical Practice</option>
      <option value="urn:li:fs_industry:139">Mental Health Care</option>
      <option value="urn:li:fs_industry:71">Military</option>
      <option value="urn:li:fs_industry:56">Mining &amp; Metals</option>
      <option value="urn:li:fs_industry:35">Motion Pictures &amp; Film</option>
      <option value="urn:li:fs_industry:37">Museums &amp; Institutions</option>
      <option value="urn:li:fs_industry:115">Music</option>
      <option value="urn:li:fs_industry:114">Nanotechnology</option>
      <option value="urn:li:fs_industry:81">Newspapers</option>
      <option value="urn:li:fs_industry:100">Non-profit Organization Management</option>
      <option value="urn:li:fs_industry:57">Oil &amp; Energy</option>
      <option value="urn:li:fs_industry:113">Online Media</option>
      <option value="urn:li:fs_industry:123">Outsourcing/Offshoring</option>
      <option value="urn:li:fs_industry:87">Package/Freight Delivery</option>
      <option value="urn:li:fs_industry:146">Packaging &amp; Containers</option>
      <option value="urn:li:fs_industry:61">Paper &amp; Forest Products</option>
      <option value="urn:li:fs_industry:39">Performing Arts</option>
      <option value="urn:li:fs_industry:15">Pharmaceuticals</option>
      <option value="urn:li:fs_industry:131">Philanthropy</option>
      <option value="urn:li:fs_industry:136">Photography</option>
      <option value="urn:li:fs_industry:117">Plastics</option>
      <option value="urn:li:fs_industry:107">Political Organization</option>
      <option value="urn:li:fs_industry:67">Primary/Secondary Education</option>
      <option value="urn:li:fs_industry:83">Printing</option>
      <option value="urn:li:fs_industry:105">Professional Training &amp; Coaching</option>
      <option value="urn:li:fs_industry:102">Program Development</option>
      <option value="urn:li:fs_industry:79">Public Policy</option>
      <option value="urn:li:fs_industry:98">Public Relations &amp; Communications</option>
      <option value="urn:li:fs_industry:78">Public Safety</option>
      <option value="urn:li:fs_industry:82">Publishing</option>
      <option value="urn:li:fs_industry:62">Railroad Manufacture</option>
      <option value="urn:li:fs_industry:64">Ranching</option>
      <option value="urn:li:fs_industry:44">Real Estate</option>
      <option value="urn:li:fs_industry:40">Recreational Facilities &amp; Services</option>
      <option value="urn:li:fs_industry:89">Religious Institutions</option>
      <option value="urn:li:fs_industry:144">Renewables &amp; Environment</option>
      <option value="urn:li:fs_industry:70">Research</option>
      <option value="urn:li:fs_industry:32">Restaurants</option>
      <option value="urn:li:fs_industry:27">Retail</option>
      <option value="urn:li:fs_industry:121">Security &amp; Investigations</option>
      <option value="urn:li:fs_industry:7">Semiconductors</option>
      <option value="urn:li:fs_industry:58">Shipbuilding</option>
      <option value="urn:li:fs_industry:20">Sporting Goods</option>
      <option value="urn:li:fs_industry:33">Sports</option>
      <option value="urn:li:fs_industry:104">Staffing &amp; Recruiting</option>
      <option value="urn:li:fs_industry:22">Supermarkets</option>
      <option value="urn:li:fs_industry:8">Telecommunications</option>
      <option value="urn:li:fs_industry:60">Textiles</option>
      <option value="urn:li:fs_industry:130">Think Tanks</option>
      <option value="urn:li:fs_industry:21">Tobacco</option>
      <option value="urn:li:fs_industry:108">Translation &amp; Localization</option>
      <option value="urn:li:fs_industry:92">Transportation/Trucking/Railroad</option>
      <option value="urn:li:fs_industry:59">Utilities</option>
      <option value="urn:li:fs_industry:106">Venture Capital &amp; Private Equity</option>
      <option value="urn:li:fs_industry:16">Veterinary</option>
      <option value="urn:li:fs_industry:93">Warehousing</option>
      <option value="urn:li:fs_industry:133">Wholesale</option>
      <option value="urn:li:fs_industry:142">Wine &amp; Spirits</option>
      <option value="urn:li:fs_industry:119">Wireless</option>
      <option value="urn:li:fs_industry:103">Writing &amp; Editing</option>
    </select>
    
    </div>
   </div>
    
            <div class="pe-form-field summary-field floating-label  ">
     <label for="topcard-summary" class="pe-form-field__label label-text">
        Summary
      </label>
    
      <textarea name="summary" id="topcard-summary" class="ember-text-area pe-form-field__textarea ember-view"></textarea>
    
    </div>
    
          </div>
        </div>
          
    
      </div>
    </form>
    
    
    
    <div id="ember3742" class="ember-view"><div id="ember3743" class="ember-view"></div></div>
    </div>
    </div><div id="ember3744" class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"></div><div id="ember3745" class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"></div><div id="ember3746" class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"></div><div id="ember3747" class="carousel-item focused-easeInOut-motion carousel-item--pop visibility-hidden ember-view"></div>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" >Save</button>
      </div>
    </div>

  </div>
</div>



        <br/>
        <br/>

        
        </body>
      </div>
                
                                            
        )
    }
}
// const mapStateToProps = state =>{
//     console.log(state);
//     return {
//         authFlag : state.authFlag
//     }
// }

// const mapDispatchStateToProps = dispatch => {
//     return {
//         onSubmitHandle : (data) => {
//             axios.post('http://localhost:3001/login', data)
//                 .then((response) => {
//                     console.log(response.data);
//                     dispatch({type: 'LOGIN',payload : response.data.updatedList,statusCode : response.status})
//             });
//         }
//     }
// }
export default Homepage;
// export default connect(mapStateToProps,mapDispatchStateToProps)(SignupLogin;