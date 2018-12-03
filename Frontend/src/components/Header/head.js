import React, { Component } from "react";
import "../../css/jobSearch.css";
class Header extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
     
    };
    this.clear = this.clear.bind(this);

 
  }
  clear(){
    localStorage.clear();
    window.location.href="http://localhost:3000/login"
  }
  render() {
    return (
      <div class="menu">
        <div class="extendmenu row">
          <div class="icon">
            <i class="fa fa-linkedin-square" />
          </div>

          <div class="job">
            <div class="row">
              <div col="col-2" class="inputfield ">
                <input
                  style={{ "background-color": "#e1e9ee" }}
                  type="text"
                  placeholder="Search"
                  onChange={this.SearchChangeHandler}
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-home w3-jumbo" />
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal">Home</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-user w3-jumbo" />
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal">User</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-briefcase w3-jumbo" />
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal">Jobs</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-bell-o w3-jumbo" />
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal" style={{ textAlign: "center" }}>
                      Notifications
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-envelope w3-jumbo" />
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal">Messaging</span>
                  </a>
                </div>
              </div>
            </div>
            <li><a href="/login" onClick={this.clear}>LogOut</a></li>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
