import React, { Component } from "react";
import supportingImage3 from "../../images/supportingImage3.jpg";
import supportingImage4 from "../../images/supportingImage4.jpg";
import supportingImage1 from "../../images/supportingImage1.png";
import Modal from "react-responsive-modal";
import supportingImage2 from "../../images/supportingImage2.png";
import "../../css/jobDetails.css";

class JobDetails extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      open: false
    };
    this.openbox = this.openbox.bind(this);
    this.closebox = this.closebox.bind(this);
  }
  openbox() {
    this.setState({
      open: true
    });
  }
  closebox() {
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <div style={{ position: "relative", left: "0", top: "0" }} class="detail">
        <img
          src={supportingImage3}
          style={{ width: "100%", height: "250px" }}
          class="image1"
        />
        <div class="col-5" style={{ float: "right", "padding-left": "100px" }}>
          <img
            src={supportingImage1}
            style={{ width: "400px", height: "500px" }}
          />
        </div>
        <div class="over">
          <div>
            <div class="row">
              <div class="col-4">
                <img
                  src={supportingImage4}
                  style={{ width: "200px", height: "200px" }}
                  class="image2"
                />
              </div>

              <div
                className="col-8 "
                style={{ "padding-left": "20px", "padding-top": "10px" }}
              >
                <li class="blue">InternShip</li>
                <br />
                Google
                <br />
                San JOse
                <br />
                <button class="Button" onClick={this.Search}>
                  Save
                </button>
                <button class="Button" onClick={this.openbox}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="over1">
          <div class="row">
            <div
              class="col-4"
              style={{ "padding-left": "40px", "padding-top": "20px" }}
            >
              Job
              <br />
              <li> &bull;0 applicants</li>
            </div>
            <div
              class="col-4"
              style={{ "padding-left": "40px", "padding-top": "20px" }}
            >
              Company
              <br />
              <li>&bull; Architecture & Planning</li>
              <br />
              <li>&bull; 1000 employess</li>
            </div>
            <div
              class="col-4"
              style={{ "padding-left": "40px", "padding-top": "20px" }}
            >
              Connections
              <br />
              <li>&bull; 0 Connections</li>
            </div>
            <div
              style={{
                "padding-left": "30px",
                "padding-top": "20px",
                color: "rgba(0,0,0,.6)"
              }}
            >
              Job Description
            </div>
            <hr />
          </div>

          <div class="row" style={{ "padding-left": "30px" }}>
            <div class="col-6">
              <div
                style={{ "text-align": "justify", "padding-bottom": "10px" }}
              >
                {" "}
              </div>

              <div
                style={{ "text-align": "justify", "padding-bottom": "10px" }}
              >
                M Moser Associates is looking for a seasoned Interior Designer
                to lead our San Francisco team of architects, interior
                designers, and construction professionals in the design and
                delivery of transformative large scale workplace projects.
              </div>
              <div
                style={{ "text-align": "justify", "padding-bottom": "10px" }}
              >
                M Moser aims to transform the way people work and as such we are
                seeking design professionals who are motivated by people and are
                inspired by how design connects elements of people,
                organizations and culture, to realize business goals.
              </div>
              <div style={{ "text-align": "justify" }}>
                As the Design Leader you will play a key role in advancing our
                design solutions, in generating new ideas for both projects and
                for the systems we use execute work, while maintaining
                enthusiasm about achieving clients business goals through our
                design
              </div>
            </div>
            <div class="col-6">
              <img
                src={supportingImage2}
                style={{ width: "250px", height: "500px" }}
              />
              <div
                style={{ color: "rgba(0,0,0,.6)", "padding-bottom": "10px" }}
              >
                Job Details
              </div>
              <div style={{ color: "rgba(0,0,0,.75)", "font-size": "1.0rem" }}>
                Employment Type
              </div>
              <div style={{ "padding-bottom": "10px" }}>Full Time</div>
              <div style={{ color: "rgba(0,0,0,.75)", "font-size": "1.0rem" }}>
                Industry
              </div>
              <div style={{ "padding-bottom": "10px" }}>Designing</div>
              <div style={{ color: "rgba(0,0,0,.75)", "font-size": "1.0rem" }}>
                Functions
              </div>
              <div style={{ "padding-bottom": "10px" }}>Planning</div>
            </div>
          </div>

          {/* --------------------------Model------------------------------------------------------------------------- */}
          <div class="modal-dialog modal-lg">
            <Modal
              open={this.state.open}
              onClose={this.closebox}
              style={{ "min-width": "800px" }}
              center
            >
              <header class="modal-header">
                <h2 style={{ color: "rgba(0,0,0,.75)" }}>Apply To Google</h2>
              </header>
              <div class="row">
                <div>
                  <img src={supportingImage3} />{" "}
                </div>
                <div class="col-4">
                  Aishwariya Bhatt <br />
                  Student <br />
                  San Jose
                </div>
              </div>

              <div style={{ horizontalAlign: "middle" }}>
                <span style={{ display: "block" }}>
                  Email:
                  <input
                    type="text"
                    placeholder="EmailAddress"
                    onChange={this.propertyTopic}
                    style={{
                      "margin-bottom": "10px",
                      width: "100%",
                      height: "44px",
                      padding: "9px 14px",
                      "font-size": "10px",
                      "border-radius": "0px",
                      "line-height": "1.33",
                      "margin-top": "16px"
                    }}
                  />
                </span>
                <span style={{ display: "block" }}>
                  Phone Number:{" "}
                  <input
                    type="text"
                    placeholder="PhoneNumber"
                    onChange={this.propertyTopic}
                    style={{
                      "margin-bottom": "10px",
                      width: "100%",
                      height: "44px",
                      padding: "9px 14px",
                      "font-size": "10px",
                      "border-radius": "0px",
                      "line-height": "1.33",
                      "margin-top": "16px"
                    }}
                  />
                </span>
                Resume(Optional):
                <br />
                <input
                  type="submit"
                  value="Upload Resume"
                  onClick={this.closebox}
                  style={{
                    "vertical-align": "middle",
                    width: "25%",
                    height: "40px",
                    "background-color": "light-grey",
                    "border-color": "light-grey",
                    "font-size": "18px",
                    color: "black",
                    "text-align": "center",
                    cursor: "pointer"
                  }}
                />
                <br />
                Microsoft Word or PDF only (5MB)
                <br /> <br />
                We include a copy of your full profile with your application
                Learn what we do with your resume
                <br /> <br />
                <span style={{ justifyContent: "center", display: "flex" }}>
                  <input
                    type="submit"
                    value="Cancel"
                    onClick={this.closebox}
                    style={{
                      "vertical-align": "middle",
                      width: "40%",
                      height: "44px",
                      "background-color": "light-grey",
                      "border-color": "light-grey",
                      "font-size": "18px",
                      color: "black",
                      padding: " 7px 31px",
                      "text-align": "center",
                      cursor: "pointer"
                    }}
                  />

                  <input
                    type="submit"
                    value="Submit Application"
                    onClick={this.sendQuery}
                    style={{
                      "margin-left": "5px",
                      "vertical-align": "middle",
                      width: "40%",
                      height: "44px",
                      "background-color": "#ff8a00",
                      "border-color": "#ff8a00",
                      "font-size": "18px",
                      color: "#FFE",
                      padding: " 7px 31px",
                      "text-align": "center",
                      cursor: "pointer"
                    }}
                  />
                </span>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default JobDetails;
