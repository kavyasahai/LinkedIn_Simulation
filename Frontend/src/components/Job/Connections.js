import React, { Component } from "react";
import Header from "../Header/header";
import "../../css/connectionList.css";
import supportingimage4 from "../../images/supportingImage4.jpg";
import supportingimage5 from "../../images/supportingImage5.png";
import { getJWTUsername } from "../common/auth";
import {
  getAllConnections,
  acceptConnection,
  rejectConnection,
  getReceivedConnections
} from "../../actions/connectionsActions";
import { connect } from "react-redux";

class network extends Component {
  sendMessage = () => {
    this.props.history.push("/messaging");
  };

  accept = data => {
    var username = getJWTUsername();
    const connectionData = {
      connector: data.email,
      connectee: username
    };
    console.log(connectionData);
    //this.props.acceptConnection(connectionData);
  };

  reject = data => {
    var username = getJWTUsername();
    const connectionData = {
      connector: data.email,
      connectee: username
    };
    this.props.rejectConnection(username);
  };

  componentDidMount() {
    var username = getJWTUsername();
    this.props.getAllConnections(username);
    this.props.getReceivedConnections(username);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={{ "padding-top": "7vw" }} />
        <div class="row">
          <div class="acceptRejectConnection">
            {this.props.allConnections.connection &&
              this.props.allConnections.connection.receivedConnections.map(
                data => (
                  <div key={data.firstname}>
                    <div class="row">
                      <div class="col-2">
                        <img
                          src={supportingimage4}
                          style={{
                            width: "7vw",
                            height: "7vw",
                            "border-radius": "50%"
                          }}
                        />
                      </div>

                      <div class="col-6" style={{ paddingTop: "2vw" }}>
                        <b>
                          {data.firstname} {data.lastname}
                        </b>
                        <br />
                        <div>
                          <p style={{ "font-size": "0.6rem" }}>
                            {data.jobTitle} | {data.companyName}
                          </p>
                          <p style={{ "font-size": "0.6rem" }}>
                            {" "}
                            Connected 5 days ago
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-2"
                        style={{ float: "right", paddingTop: "2vw" }}
                      >
                        <button
                          class="message"
                          onClick={() => this.accept(data)}
                        >
                          {" "}
                          Accept
                        </button>
                      </div>
                      <div class="col-2" style={{ paddingTop: "2vw" }}>
                        <button
                          class="message"
                          onClick={() => this.reject(data)}
                        >
                          {" "}
                          Reject
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              )}
          </div>

          <div class="connection">
            {this.props.allConnections.connection &&
              this.props.allConnections.connection.acceptedConnections.map(
                data => (
                  <div key={data.firstname}>
                    <div class="row">
                      <div class="col-2">
                        <img
                          src={supportingimage4}
                          style={{
                            width: "7vw",
                            height: "7vw",
                            "border-radius": "50%"
                          }}
                        />
                      </div>

                      <div class="col-6" style={{ paddingTop: "2vw" }}>
                        <b>
                          {data.firstname} {data.lastname}
                        </b>
                        <br />
                        <div>
                          <p style={{ "font-size": "0.6rem" }}>
                            {data.jobTitle} | {data.companyName}
                          </p>
                          <p style={{ "font-size": "0.6rem" }}>
                            {" "}
                            Connected 5 days ago
                          </p>
                        </div>
                      </div>
                      <div
                        class="col-2"
                        style={{ float: "right", paddingTop: "2vw" }}
                      >
                        <button class="message" onClick={this.sendMessage}>
                          {" "}
                          Message
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              )}
          </div>
          <div className="image5">
            <img
              src={supportingimage5}
              style={{ width: "25vw", height: "30vw" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allConnections: state.connections.allConnections,
  acceptConnection: state.connections.acceptConnection,
  rejectConnection: state.connections.rejectConnection,
  receivedConnections: state.connections.receivedConnections
});

export default connect(
  mapStateToProps,
  {
    getAllConnections,
    acceptConnection,
    rejectConnection,
    getReceivedConnections
  }
)(network);
