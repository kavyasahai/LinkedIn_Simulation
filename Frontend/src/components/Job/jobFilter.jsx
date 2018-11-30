import React, { Component } from "react";
import "../../css/jobSearch.css";

class JobFilter extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {};
  }

  render() {
    return (
      <div class="filer row">
        <div class="col-2">
          <li class=" nav-item dropdown ">
            <a
              class="  dropdown-toggle "
              id="navbardrop"
              data-toggle="dropdown"
            >
              Jobs
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item">All</a>
              <a class="dropdown-item">People</a>
              <a class="dropdown-item">Content</a>
              <a class="dropdown-item">Companies</a>
              <a class="dropdown-item">Groups</a>
              <a class="dropdown-item">Schools</a>
            </div>
          </li>
        </div>
        <div class="col-2">
          <li class=" dropdown ">
            <a
              class="  dropdown-toggle border"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Date Posted
            </a>
            <div class="dropdown-menu">
              <input type="radio" checked="checked" name="radio" /> Past 24Hours{" "}
              <br />
              <input type="radio" checked="checked" name="radio" /> Past Week
              <br />
              <input type="radio" checked="checked" name="radio" /> Past Month
              <br />
              <input type="radio" checked="checked" name="radio" /> Any Time
              <br />
            </div>
          </li>
        </div>
        <div class="col-2">
          <li class=" dropdown ">
            <a
              class="  dropdown-toggle border"
              id="navbardrop"
              data-toggle="dropdown"
            >
              LinkedIn Features
            </a>

            <div class="dropdown-menu">
              <input type="radio" checked="checked" name="radio" /> In Your
              Network <br />
              <input type="radio" checked="checked" name="radio" /> Easy Apply
              <br />
              <input type="radio" checked="checked" name="radio" /> Under 10
              Applicants
              <br />
            </div>
          </li>
        </div>
        <div class="col-2">
          <li class=" dropdown ">
            <a
              class="  dropdown-toggle border"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Company{" "}
            </a>
            <div class="dropdown-menu">
              <input type="radio" checked="checked" name="radio" /> Google{" "}
              <br />
              <input type="radio" checked="checked" name="radio" /> Facebook
              <br />
              <input type="radio" checked="checked" name="radio" /> IBM
              <br />
              <input type="radio" checked="checked" name="radio" /> Netflix
              <br />
            </div>
          </li>
        </div>
        <div class="col-2">
          <li class=" dropdown ">
            <a
              class="  dropdown-toggle border"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Experience Level
            </a>
            <div class="dropdown-menu">
              <input type="radio" checked="checked" name="radio" /> Internship{" "}
              <br />
              <input type="radio" checked="checked" name="radio" /> Entry Level
              <br />
              <input type="radio" checked="checked" name="radio" /> Aassociate
              <br />
              <input type="radio" checked="checked" name="radio" /> Mid-Senior
              Level
              <br />
              <input type="radio" checked="checked" name="radio" /> Director
              <br />
              <input type="radio" name="radio" /> Executive
              <br />
            </div>
          </li>
        </div>
        <div class="col-2">
          <li>All Filters</li>
        </div>
      </div>
    );
  }
}

export default JobFilter;