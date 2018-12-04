import React, { Component } from "react";
import HomeHeader from "../Header/head";
import { searchJob, saveJob, applyJob,getsavedJob,getAppliedJob } from "../../actions/jobActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "../common/auth";
import { getJWTUsername } from "../common/auth";
import { Redirect } from "react-router";
import supportingImage2 from "../../images/supportingImage2.png";
import axios from "axios";
 class Jobsaved extends Component {
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
      
          properties1: []
        };
       
      }

     componentDidMount(){
        const data = {
         
            email:getJWTUsername(),
            username:getJWTUsername()
          };
         this.props.getAppliedJob(data,()=>{
           console.log("Applied");
      
          });
      

          // var jobdetails = this.props.savedjobs.filter(function(property) {
          //   return property._id == ""
          // });

         
     }
    render(){
        console.log(this.state.properties1)
        var i = -1;
        let Details = this.state.properties1.map(property => {
            i = i + 1;
      
            const token = getToken();
      
            let redirectVar = null;
            if (token === false) {
              redirectVar = <Redirect to="/login" />;
            }
            return (
              <div class="row" style={{ paddingLeft: "5vw" }}>
                {redirectVar}
      
                <div class="Jobs  row" style={{"maxWidth":"50%"}}>
                  <div class="col-1">
                    <img src={supportingImage2} />
                  </div>
                  <div
                    class="col-6"
                    style={{ "padding-left": "30px", "padding-top": "10px" }}
                  >
                    <li class="blue" >
                      {property.emailID}
                    </li>
                    <br />
                    {property.postedBy}
                    <br />
                    {property.location}
                    <br />
                    {property.description}
                    <br />
                  </div>
                </div>
              </div>
            );
          });
      
        return(
            <div>
                    <div>
                    <HomeHeader></HomeHeader>
                    </div>
                    <div>
                        Your Saved Jobs:
                    </div>
                    <div>
                        {Details}
                        </div>    
                    
            </div>
        )
    
}
}

const mapStateToProps = state => ({
    search_job_results: state.jobReducer.search_job_results,
    view: state.jobReducer.view,
    savedjobs:state.jobReducer.savejob
  });
  
  export default connect(
    mapStateToProps,
    { searchJob, saveJob, applyJob,getsavedJob,getAppliedJob }
  )(Jobsaved);