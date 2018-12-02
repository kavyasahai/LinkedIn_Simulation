import React, { Component } from "react";
import Header from "../Header/head"
import "../../css/connectionList.css"
import supportingimage4 from "../../images/supportingImage4.jpg"
import supportingimage5 from "../../images/supportingImage5.png"

class network extends Component{
    render(){
        return(
            <div>
                <div>
                <Header/>
                </div>
                <div style={{"padding-top":"3vw"}}></div>
                <div class="row">
                <div class="connection" >
                    <div class="row">
                     
                       <div class="col-2">
                         <img src={supportingimage4} style={{"width":"7vw","height":"7vw","border-radius":"50%"}}/>
                       </div>
                       <div class="col-6" style={{"paddingTop":"2vw"}}>
                       <b>Sheena Gupta</b>
                       <br></br>
                      <div >
                          <p style={{"font-size":"0.6rem"}}>Actively seeking Summer Internship | Studies at San Jose State University</p>
                          <p style={{"font-size":"0.6rem"}}> Connected 5 days ago</p>
                      </div>
                       
                       </div>
                       <div class="col-2" style={{"float":"right","paddingTop":"2vw"}}>
                        <button class="message"> Message</button>
                       </div>
                       <div class="col-2" style={{"paddingTop":"2vw"}}>
                        <button class="message"> Remove connection</button>
                       </div>
                    </div>
                    <hr></hr>
                     <div class="row">
                       <div class="col-2">
                         <img src={supportingimage4} style={{"width":"7vw","height":"7vw","border-radius":"50%"}}/>
                       </div>
                       <div class="col-6" style={{"paddingTop":"2vw"}}>
                       <b>Sheena Gupta</b>
                       <br></br>
                      <div >
                          <p style={{"font-size":"0.6rem"}}>Actively seeking Summer Internship | Studies at San Jose State University</p>
                          <p style={{"font-size":"0.6rem"}}> Connected 5 days ago</p>
                      </div>
                       
                       </div>
                       <div class="col-2" style={{"float":"right","paddingTop":"2vw"}}>
                        <button class="message"> Message</button>
                       </div>
                       <div class="col-2" style={{"paddingTop":"2vw"}}>
                        <button class="message"> Remove connection</button>
                       </div>
                    </div>
                    <hr></hr>
                </div>
                <div>
                <img src={supportingimage5} style={{"width":"25vw","height":"45vw"}}/>
                </div>
                </div>
             </div>   
            
        )
    }
}
export default network