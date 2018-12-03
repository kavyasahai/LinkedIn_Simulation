import React, { Component } from "react";
import "../../css/jopApplication.css";
import "../common/auth"
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import supportingImage4 from "../../images/supportingImage4.jpg";
import supportingImage2 from "../../images/supportingImage2.png";
import { searchJob, saveJob, applyJob } from "../../actions/jobActions";
import Home from './jobFilter'
import { getJWTUsername } from "../common/auth";

class JobSearch extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      firstname:"",
      lastname:"",
      address:"",
      email:"",
      imageNumber: 0,
   selectedOption:"",
      imageView: [],
      open: false
    };
    this.FirstnameChangeHandler = this.FirstnameChangeHandler.bind(this);
    this.LastnameChangeHandler = this.LastnameChangeHandler.bind(this);
    this.EmailChangeHandler=this.EmailChangeHandler.bind(this);
    this.AddressChangeHandler=this.AddressChangeHandler.bind(this);
    this.TextChangeHandler=this.TextChangeHandler.bind(this);
    this.handleOptionChange=this.handleOptionChange.bind(this);
    this.handleOptionChange1=this.handleOptionChange1.bind(this);
    this.handleOptionChange2=this.handleOptionChange2.bind(this);
    this.Submit=this.Submit.bind(this);
  
  }
FirstnameChangeHandler = e => {
    this.setState({
      firstname: e.target.value
    });
  };
  LastnameChangeHandler= e => {
    this.setState({
      Job: e.target.value
    });
  };
  EmailChangeHandler= e => {
    this.setState({
      Job: e.target.value
    });
  };
  AddressChangeHandler= e => {
    this.setState({
      Job: e.target.value
    });
  };
  TextChangeHandler= e => {
    this.setState({
      Job: e.target.value
    });
  };
  handleOptionChange= (e)=>{
    if(e.target.value=="on"){
    console.log(e.target.value)
    this.setState({
      selectedOption:"Yes"
    });}
  }
  handleOptionChange1= (e)=>{
    if(e.target.value=="on"){
    console.log(e.target.value)
    this.setState({
      selectedOption:"Yes"
    });}
  }
  handleOptionChange2= (e)=>{
    if(e.target.value=="on"){
    console.log(e.target.value)
    this.setState({
      selectedOption:"Yes"
    });}
  }
  componentDidMount(){
    const foo =this.props.location.state;
    console.log("Foo",foo);

  }

  Submit=e=>{
    const data={
      firstname:this.state.firstname
    }
    console.log(data);
    //this.props.applyJob(data);
  }
  render() {
   
console.log("Props",this.state.handleOptionChange);
    return (
      <div class="menu">
        <div class="extendmenu row">
          <div class="icon">
            <i class="fa fa-linkedin-square" />
          </div>
          <h5 style={{"color":"white"}}>   Linkedin Apply</h5>
     </div>
    <div style={{"background-color": "#5c6f7c"}}>
     <div class="alignment">
          <div class="row" >
            <div class="col-1">
              <img
                src={supportingImage2}
                style={{ width: "100px", height: "100px" }}
              />
            </div>

            <div
              class="col-6"
              style={{"paddingLeft":"5%", "padding-top": "10px" }}
            >
              <li class="blue">
                <a target="_blank">
                  <Link to="/Detail">{this.props.location.state}</Link>
                </a>
              </li>
              <br />
              Googgle
              <br />
              San Jose, Ca
              <br />
              </div>
              </div>
     </div>
     
     </div>
     <div class="alignment" style={{"padding-top":"2vw"}}> Linkedin Profile</div>
     <div>
        
     <div class="row alignment" style={{"padding-top":"2vw"}}>
     
     <br></br>
                <div>
                   <img src={supportingImage2} style={{"border-radius":"50%", "width":"6vw","height":"4vw"}} />{" "}
                </div>
                <div class="col-4">
                  Aishwariya Bhatt <br />
                  Student <br />
                  San Jose
                </div>
              </div>
    <div class="alignment">
    First Name:  <div col="col-2" class="inputfield1 ">
          
          <input
            style={{"background-color": "#e1e9ee","font-size":"0.8rem"}}
            type="text"
            placeholder="Search"
            onChange={this.FirstnameChangeHandler}
          />
          </div>
    Last Name:
    <div col="col-2" class="inputfield1 ">
          
          <input
            style={{"background-color": "#e1e9ee","font-size":"0.8rem"}}
            type="text"
            placeholder="Search"
            onChange={this.LastnameChangeHandler}
          />
          </div>
    Email:
    <div col="col-2" class="inputfield1 ">
          
          <input
            style={{"background-color": "#e1e9ee","font-size":"0.8rem"}}
            type="text"
            placeholder="Search"
            onChange={this.EmailChangeHandler
            }
          />
          </div>
    Address:
    <div col="col-2" class="inputfield1 ">
          
          <input
            style={{"background-color": "#e1e9ee","font-size":"0.8rem"}}
            type="text"
            placeholder="Search"
            onChange={this.AddressChangeHandler}
          />
          </div>
         
    Upload Your Resume:
<br></br>
    <button class="Button" onClick={this.upload}>
            Upload Resume
          </button>
          <br></br>
          <br></br>
    How did your hear about us:
    <div col="col-2" class="inputfield ">
          
          <input
            style={{"background-color": "#e1e9ee", "width":"35vw","height":"7vw"}}
            type="textarea"
            placeholder="Search"
            onChange={this.TextChangeHandler}
          />
          </div>
<br></br>
<br>
</br>
<br></br>
    Disability Question:
    <br/>
    <div>
        Are you Physically Challenged
        <br></br>
        <input type="radio" name="radio"  onChange={this.handleOptionChange}/> Yes{" "}
              <br />
              <input type="radio" name="radio"  onChange={this.handleOptionChange1} /> No
              <br />
    </div>
    <br/>
    Diversity  and  Sponsership Questions
    <br/>
    <div>
        Are you legally authorized to work in the united states?
        <br></br>
        <input type="radio" name="radio" value="Yes" onChange={this.handleOptionChange1} /> Yes{" "}
              <br />
              <input type="radio" name="radio" /> No
              <br />
        Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)? 
        <br></br>
        <input type="radio" name="radio" /> Yes{" "}
              <br />
              <input type="radio" name="radio" /> No
              <br />
    </div>
    <br/>
    <div class="alignment">
    <button class="Button" onClick={this.Submit}>
            Submit Application
          </button>
    </div>
    </div>
         </div>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  search_job_results: state.jobReducer.search_job_results,
  view: state.jobReducer.updatedList
});

export default connect(
  mapStateToProps,
  { searchJob, saveJob, applyJob }
)(JobSearch);
