import React, { Component } from "react";
import supportingImage4 from "../../images/supportingImage4.jpg";
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
 
    // window.location.href = "http://localhost:3000/login";
    this.props.history.push("/login");
  }
  render() {
    return (
      <div class="menu">
        <div class="extendmenu row">
          <div class="icon">
            <i class="fa fa-linkedin-square" />
          </div>

          <div class="header">
            <div class="row">
             
                <input
                  style={{ "background-color": "#e1e9ee" }}
                  type="text"
                  placeholder="Search"
                />
         
            </div>
          </div>

          <div class="row" style={{"paddingLeft":"5vw"}}>
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
            <div class="col-2.75" >
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-user w3-jumbo" style={{"padding-left": "20%","marginRight":"0"}} />
                  </a>
                </div>
                <div class="go-middle">
                
                <li class="blue" class="nav-item dropdown" style={{"opacity":"unset","padding":0}}>
                             <a class=" dropdown-toggle"  id="navbardrop" data-toggle="dropdown">
                             <span class="normal">My Network</span>     </a>
                              <div class="dropdown-menu">
                               
                                <a class="dropdown-item" href="/">MyRequests</a>
                                            
                                            </div>
                                            </li>
                 
                </div>
              </div>
            </div>
            <div class="col-2.5" style={{"paddingLeft":"0.5vw"}}>
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-briefcase w3-jumbo"style={{ "padding-left": "0.5vw"}}/>
                  </a>
                </div>
                <div class="go-middle">
                <li class="blue" class="nav-item dropdown" style={{"opacity":"unset","padding":0}}>
                             <a class=" dropdown-toggle"  id="navbardrop" data-toggle="dropdown">
                             <span class="normal">My Jobs</span>     </a>
                              <div class="dropdown-menu">
                               
                                <a class="dropdown-item" href="/">Saved Jobs</a>
                                <a class="dropdown-item" href="/">Applied Jobs</a>
                                            
                                            </div>
                                            </li>
                </div>
              </div>
            </div>
            <div class="col-2.5">
              <div class="go-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-bell-o w3-jumbo" style={{ "alignContent": "center" ,"padding-left": "1.5vw"}}/>
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal" style={{ "alignContent": "center" }}>
                      Notifications
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="go.5-inline">
                <div>
                  <a href="/home">
                    <i class="fa fa-envelope w3-jumbo"style={{ "alignContent": "center","padding-left": "1.5vw" }} />
                  </a>
                </div>
                <div class="go-middle">
                  <a href="/home">
                    <span class="normal">Messaging</span>
                  </a>
                </div>
              </div>
            </div>
          
          </div>
          <img src={supportingImage4}  class="dropdown dropdown-toggle">
          <div class="dropdown-menu">
                               
                                <a class="dropdown-item" href="/">Saved Jobs</a>
                                <a class="dropdown-item" href="/">Applied Jobs</a>
                                            
                                            </div>
                                            </img>
        </div>
      </div>
    );
  }
}
export default Header;
