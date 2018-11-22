import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './JobSearch';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route exact path="/" component={Home}/>
       
              
            </div>
        )
        }
}

export default Main;