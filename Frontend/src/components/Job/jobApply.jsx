import React, { Component } from "react";
import "../../css/jopApplication.css";
import "../common/auth"
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getJWTUsername } from "../common/auth";
import Modal from "react-responsive-modal";
import supportingImage4 from "../../images/supportingImage4.jpg";
import supportingImage2 from "../../images/supportingImage2.png";
import { searchJob, saveJob, applyJob } from "../../actions/jobActions";
import Home from './jobFilter'


class JobSearch extends Component {
  constructor(props) {
    //Call the constrictor of Super class i.e The Component
    super(props);
    //maintain the state required for this component
    this.state = {
      firstname:"",
      lastname:"",
      state:"",
      city:"",
      email:"",
      imageNumber: 0,
   selectedOption:"",
      imageView: [],
      value:"",
      value1:"",
      value2:"",
      userdata:[],
      open: false
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.FirstnameChangeHandler = this.FirstnameChangeHandler.bind(this);
    this.LastnameChangeHandler = this.LastnameChangeHandler.bind(this);
    this.EmailChangeHandler=this.EmailChangeHandler.bind(this);
    this.StateChangeHandler=this.StateChangeHandler.bind(this);
    this.TextChangeHandler=this.TextChangeHandler.bind(this);
    this.CityChangeHandler=this.CityChangeHandler.bind(this);
       this.Submit=this.Submit.bind(this);
  
  }
FirstnameChangeHandler = e => {
    this.setState({
      firstname: e.target.value
    });
  };
  LastnameChangeHandler= e => {
    this.setState({
     lastname:e.target.value
    });
  };
  EmailChangeHandler= e => {
    this.setState({
      email:e.target.value
    });
  };
  StateChangeHandler= e => {
    this.setState({
     state:e.target.value
    });
  };
  CityChangeHandler= e => {
    this.setState({
      city: e.target.value
    });
  };
  TextChangeHandler= e => {
    this.setState({
      Job: e.target.value
    });
  };
 
  handleChange(event) {
        
    this.setState({value: event.target.value});
}
handleChange1(event) {
        
  this.setState({value1: event.target.value});
}
handleChange2(event) {
        
  this.setState({value2: event.target.value});
}
  componentDidMount(){
    // const foo =this.props.location.state;
    // console.log("Foo",foo);
    const data={
      username:getJWTUsername()
    }
    const res =  axios
    .post("http://localhost:3001/getuserdata", data)
    .then(response => {
      console.log("Updated List", response.data.updatedList);
      this.setState({
        userdata: response.data.updatedList
      });
    });
console.log("IDDDD:",this.props.match.params.id)
  }

  Submit=e=>{
    const data={
      firstname:this.state.firstname
    }
    console.log(data);
    //this.props.applyJob(data);
  }
  render() {
   console.log(this.state.userdata)

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
                src={this.state.userdata.photo}
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
              {/* {this.state.property.company} */}
              <br />
              {/* {property.location} */}
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
    State:
    <div col="col-2" class="inputfield1 ">
          
          <input
            style={{"background-color": "#e1e9ee","font-size":"0.8rem"}}
            type="text"
            placeholder="Search"
            onChange={this.StateChangeHandler}
          />
          </div>
    City:
    <div col="col-2" class="inputfield1 ">
          
          <input
            style={{"background-color": "#e1e9ee","font-size":"0.8rem"}}
            type="text"
            placeholder="Se"
            onChange={this.CityChangeHandler}
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
    <div class="form-group floating-label not-empty">
                                        <placeholder>Are you Disable?</placeholder>
                                            <div class="FormSelect__wrapper">
                                                <select value={this.state.value} onChange={this.handleChange} aria-label="Property type" name="propertyType" class="form-control FormSelect__select" style={{"width":"50%"}}>
                                                    <option value=""></option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">NO</option>
                                                
                                                    <i aria-hidden="true" class="icon-chevron-down FormSelect__chevron"></i>
                                                    </select>
                                                </div>
                                            </div>
                                        
    <br/>
    Diversity  and  Sponsership Questions
    <br/>
    <div>
        
        <br></br>
        <div class="form-group floating-label not-empty">
                                        <placeholder>Are you legally authorized to work in the united states?</placeholder>
                                            <div class="FormSelect__wrapper">
                                                <select value={this.state.value1} onChange={this.handleChange1} aria-label="Property type" name="propertyType" class="form-control FormSelect__select" style={{"width":"50%"}}>
                                                    <option value=""></option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">NO</option>
                                                
                                                    <i aria-hidden="true" class="icon-chevron-down FormSelect__chevron"></i>
                                                    </select>
                                                </div>
                                            </div>

        <br></br>
        <div class="form-group floating-label not-empty">
                                        <placeholder> Will you now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)? </placeholder>
                                            <div class="FormSelect__wrapper">
                                                <select value={this.state.value2} onChange={this.handleChange2} aria-label="Property type" name="propertyType" class="form-control FormSelect__select" style={{"width":"50%"}}>
                                                    <option value=""></option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">NO</option>
                                                
                                                    <i aria-hidden="true" class="icon-chevron-down FormSelect__chevron"></i>
                                                    </select>
                                                </div>
                                            </div>
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
