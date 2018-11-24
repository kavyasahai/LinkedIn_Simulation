import React, {Component} from 'react';
import image from './Test.jpg'
import image2 from './download.jpg'
import './Detail.css'
class Detail extends Component{


    render(){
        return(
            <div style={{"position": "relative", "left": "0","top": "0"}}>
                <img src={image} style={{"width":"100%","height":"250px"}} class="image1"></img>
                <div class="over">
                <img src={image2} style={{"width":"100","height":"150px"}} class="image2"></img>
                </div>

                
            </div>
        )
    }
}
export default Detail