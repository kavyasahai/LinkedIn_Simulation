import React, {Component} from 'react';
import './JobSearch.css'

import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import image from './download.jpg'

  class JobSearch extends Component{
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
          Job:"",
          Location:"",
  properties1:[],
  view1:[],
  properties2:[],
  properties:[],
  
          imageView:[],
          open:false
           
        }
        this.openbox=this.openbox.bind(this);
        this.closebox=this.closebox.bind(this);
        this.SearchChangeHandler=this.SearchChangeHandler.bind(this);
        this.LocationChangeHandler=this.LocationChangeHandler.bind(this);
        this.Search=this.Search.bind(this);
        this.view=this.view.bind(this);
 
    
}
openbox(){
    this.setState({
        open:true
    })
}
closebox(){
    this.setState({
    open:false
    })
}
    SearchChangeHandler = (e) => {
        this.setState({
            Job: e.target.value
        })
    }
    LocationChangeHandler = (e) => {
        this.setState({
            Location: e.target.value
        })
    }
   Search=(e) => {   
       const data={
           Job:this.state.Job,
           Location:this.state.Location
       }
       this.props.search(data,()=>{ 
           
        this.setState({
            properties1:this.state.properties1.concat(this.props.properties)
        });
        this.state.properties1.map( property=>{
     
        console.log(property.Icon);
        axios.post('http://localhost:3001/download/'+property.Icon)
        .then(response => {
            console.log("Imgae Res : ",response);
            let imagePreview = 'data:image/jpg;base64, ' + response.data;
         this.setState({imageView: this.state.imageView.concat(imagePreview)  });
        });
 
    })})
       
   

     
 }
       
   

view=(e)=>{
    console.log(e);  
   var  properties1=this.props.properties  
   console.log(properties1)
   var marvelHeroes =  properties1.filter(function(hero) {
	return hero._id == e
});
  console.log(marvelHeroes)
this.setState({
    view1: marvelHeroes
})
  console.log(this.state.view1)
   
}
  
    render(){

        var i=-1
        var imageView=this.state.imageView
        
        let Details=this.state.properties1.map(property =>{
     
           i=i+1        
      
         
            return(
                
                <div class="row">
                  <div class="col-6">
                    <div class="Jobs  row">
               
                         <div class="col-1">
                        <img src={imageView[i]}></img> 
                        </div>
                          <div class="col-6"style={{"padding-left":'30px', "padding-top":"10px"}}>
                                <li class="blue" onClick={this.view.bind(this,property._id)} >{property.Position}</li><br>
                                </br>
                                {property.Company}<br></br>
                                {property.Location}<br></br>
                                {property.Details}<br></br>
                            
                          </div>
                    </div>
                    </div>
                    </div>
      
            
        )
        })

        let Details1=this.props.properties.map(property=>
                    { return (<div class=" col-6">
                        Aish
                     <div class="Jobs  row">
               
               <div class="col-1">]
              <img src={this.state.imageView}></img> 
              </div>
                <div class="col-6" style={{"padding-left":'20px', "padding-top":"10px"}}>
                      <li class="blue"  >{property.Position}</li><br>
                      </br>
                      {property.Company}<br></br>
                      {property.Location}<br></br>
                      <button class="Button" onClick={this.Search}>Save</button>
                      <button class="Button" onClick={this.openbox}>Apply</button>
                      
                      <div class="modal-dialog modal-lg">
                      <Modal open={this.state.open} onClose={this.closebox} style={{'min-width':'800px'}} center>
                      <header class="modal-header">   
                      <h2 style={{    'color': 'rgba(0,0,0,.75)'}}>Apply To {property.Company}</h2>
                      </header>
                      <div class="row">
                      <div>
                      <img src={image}></img> </div>
                      <div class="col-4">
                      Aishwariya Bhatt <br></br>
                      Student <br></br>
                      San Jose
                      </div>
                      </div>
                     
                

                    <div style={{'horizontalAlign':'middle'}}>
                    <span style={{'display':'block'}}>   
                    Email:            
                                      <input type="text" placeholder="EmailAddress" onChange={this.propertyTopic} style={{'margin-bottom':'10px','width': '100%','height': '44px','padding':  '9px 14px','font-size':  '10px','border-radius':  '0px','line-height':  '1.33','margin-top':  '16px'}}/>
                  </span>
          
                      <span style={{'display':'block'}}>
                                      Phone Number:  <input type="text" placeholder="PhoneNumber" onChange={this.propertyTopic} style={{'margin-bottom':'10px','width': '100%','height': '44px','padding':  '9px 14px','font-size':  '10px','border-radius':  '0px','line-height':  '1.33','margin-top':  '16px'}}/>
                      </span>

                      Resume(Optional):<br></br>
                      <input type="submit" value="Upload Resume" onClick={this.closebox} style={{'vertical-align':'middle','width':'25%','height':'40px','background-color':'light-grey','border-color':'light-grey','font-size':'18px','color':'black','text-align':'center','cursor':'pointer'}}/>
                      <br></br>
                        Microsoft Word or PDF only (5MB)
                        <br/> <br></br>
                        We include a copy of your full profile with your application
                        Learn what we do with your resume
          <br></br> <br></br>
                      <span style={{'justifyContent':'center','display':'flex'}}>
                      <input type="submit" value="Cancel" onClick={this.closebox} style={{'vertical-align':'middle','width':'40%','height':'44px','background-color':'light-grey','border-color':'light-grey','font-size':'18px','color':'black','padding':' 7px 31px','text-align':'center','cursor':'pointer'}}/>
                      
                      
                      <input type="submit"  value="Submit Application"  onClick={this.sendQuery}  style={{'margin-left':'5px','vertical-align':'middle','width':'40%','height':'44px','background-color':'#ff8a00','border-color':'#ff8a00','font-size':'18px','color':'#FFE','padding':' 7px 31px','text-align':'center','cursor':'pointer'}}/>
          
                      </span>
          
                    </div>
                  </Modal>
                  </div>
                   }
                    </div>
           </div>
            </div> 
         ) })
              
        return(
            
            
                <div class="menu">
                <div class="extendmenu row">
                    <div class="icon">
                    <i class="fa fa-linkedin-square"></i>
                    </div>
                    <div class="inputfield ">
                    <input class="search" type="text" placeholder="Search" onChange= {this.SearchChangeHandler}></input>
                    <input class="search" type="text" placeholder="Job Location"onChange= {this.LocationChangeHandler}></input>
                  
                    </div>
                    <button class="Button" onClick={this.Search}>Search</button>
                    <div>
                    <i class="fa fa-home w3-jumbo"></i>
                    <i class="fa fa-user w3-jumbo"></i>
                    </div>
               </div>
               <div class="filer row">
               <div class="col-2">               
               
                            <li class=" nav-item dropdown ">
                             <a class="  dropdown-toggle "  id="navbardrop" data-toggle="dropdown">
                             Jobs
                             </a>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" >All</a>
                                <a class="dropdown-item" >People</a>
                                <a class="dropdown-item" >Content</a>
                                <a class="dropdown-item" >Companies</a>
                                <a class="dropdown-item" >Groups</a>
                                <a class="dropdown-item" >Schools</a>
                                </div>
                                </li>
                                </div>
             <div class="col-2"> 
                            <li class=" dropdown ">
                             <a class="  dropdown-toggle border"  id="navbardrop" data-toggle="dropdown">
                            Date Posted
                             </a>
                              <div class="dropdown-menu">
                             
                               
                               <input type="radio" checked="checked" name="radio"></input> Past 24Hours <br></br>
                               <input type="radio" checked="checked" name="radio"></input> Past Week<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Past Month<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Any Time<br></br>
                                            
                                            </div>
                                            </li>
            </div>
                                            <div class="col-2"> 
                                            <li class=" dropdown ">
                             <a class="  dropdown-toggle border"  id="navbardrop" data-toggle="dropdown">
                            LinkedIn Features
                             </a>
                            
                              <div class="dropdown-menu">
                             
                               
                               <input type="radio" checked="checked" name="radio"></input> In Your Network <br></br>
                               <input type="radio" checked="checked" name="radio"></input> Easy Apply<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Under 10 Applicants<br></br>
                           
                                            
                                            </div>
                                            </li>
                                            </div>
                                            <div class="col-2"> 
                                            <li class=" dropdown ">
                             <a class="  dropdown-toggle border"  id="navbardrop" data-toggle="dropdown">
                            Company                             </a>
                              <div class="dropdown-menu">
                             
                               
                               <input type="radio" checked="checked" name="radio"></input> Google <br></br>
                               <input type="radio" checked="checked" name="radio"></input> Facebook<br></br>
                               <input type="radio" checked="checked" name="radio"></input> IBM<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Netflix<br></br>
                                            
                                            </div>
                                            </li>
                                            </div>
                                            <div class="col-2"> 
                                            <li class=" dropdown ">
                             <a class="  dropdown-toggle border"  id="navbardrop" data-toggle="dropdown">
                            Experience Level
                             </a>
                              <div class="dropdown-menu">
                             
                               
                               <input type="radio" checked="checked" name="radio"></input> Internship <br></br>
                               <input type="radio" checked="checked" name="radio"></input> Entry Level<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Aassociate<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Mid-Senior Level<br></br>
                               <input type="radio" checked="checked" name="radio"></input> Director
                               <br></br>
                               <input type="radio"  name="radio"></input> Executive<br></br>
                                            
                                            </div>
                                            </li>
                                            </div>
                                            <div class="col-2"> 
                                            <li>All Filters</li>
                                            </div>
               </div>
            
               
               <div>
                   <div class="row">
                   <div class="col-6">
                   {Details} 
                   </div>
                   <div class="col-6">
                   {Details1}
                   </div>
                   </div>
                
                
              
               </div>
             </div>
              
            
                       
               
                
        )
    }
}
const mapStateToProps = state => { 
    console.log("JOB",state);
    return {
     
       properties:state.Property,
       view:state.Property
    }
}
const mapDispatchStateToProps = dispatch => {
   
      return {
          search:(data,callback)=>{
        axios.post('http://localhost:3001/data',data)
        .then((response) => {
            console.log("response data",response.data);
            dispatch({type: 'Search',payload : response.data,statusCode : response.status})
           if(response.status==200){
callback()
           }
               
            
        
        }
        )}
  }}

export default connect(mapStateToProps,mapDispatchStateToProps)(JobSearch);