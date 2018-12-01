import React, { Component } from "react";
import Header from "../Header/header"
import "../../css/connectionList.css"
import supportingimage7 from "../../images/supportingImage7.png"
import supportingimage6 from "../../images/supportingImage6.png"

class Request extends Component{
    render(){
        return(
            <div>
                <div>
                <Header/>
                </div>
                <div style={{"padding-top":"5vw"}}></div>
                <div class="row">
                 <div>
                 <img src={supportingimage7} style={{"width":"29vw","height":"35vw","padding-left":"15vw"}}/>
                 </div>
                <div class="connectionrequest" >
                 <div>
                     Invitations(112)
                     <p style={{"float":"right"}}>Manage</p>
                     <hr></hr>
                 </div>
                    <div class="row">
                      
                       <div class="col-2">
                         <img src={supportingimage6} style={{"width":"7vw","height":"7vw","border-radius":"50%"}}/>
                       </div>
                       <div class="col-5" style={{"paddingTop":"1vw","paddingLeft":"1.5vw"}}>
                       <b>Sheena Gupta</b>
                       <br></br>
                      <div >
                          <p style={{"font-size":"0.6rem"}}>Actively seeking Summer Internship | Studies at San Jose State University</p>
                   
                      </div>
                       
                       </div>
                       <div class="col-1" style={{"float":"right","paddingTop":"2vw","marginRight":"2vw"}}>
                        <button class="ignore"> Ignore</button>
                       </div>
                       <div class="col-1" style={{"paddingTop":"2vw"}}>
                        <button class="message"> Accept</button>
                       </div>
                    </div>
                    <hr></hr>
                     <div class="row">
                     <div class="col-2">
                         <img src={supportingimage6} style={{"width":"7vw","height":"7vw","border-radius":"50%"}}/>
                       </div>
                       <div class="col-5" style={{"paddingTop":"1vw","paddingLeft":"1.5vw"}}>
                       <b>Sheena Gupta</b>
                       <br></br>
                      <div >
                          <p style={{"font-size":"0.6rem"}}>Actively seeking Summer Internship | Studies at San Jose State University</p>
                        
                      </div>
                       
                       </div>
                       <div class="col-1" style={{"float":"right","paddingTop":"2vw","marginRight":"2vw"}}>
                        <button class="ignore"> Ignore</button>
                       </div>
                       <div class="col-1" style={{"paddingTop":"2vw"}}>
                        <button class="message"> Accept</button>
                       </div>
                    </div>
                    <hr></hr>
                </div>
                   <div>
                   <img src={supportingimage6} style={{"width":"21vw","height":"35vw","padding-left":"1vw"}}/>
                   </div>
                </div>
             </div>   
            
        )
    }
}
export default Request