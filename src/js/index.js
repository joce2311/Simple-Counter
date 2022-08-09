//import react into the bundle

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return(<div className="bigCounter">
        <div className="calendar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>
        </div>
  
           <div className="four">{props.digitFour %10}</div>
           <div className="three">{props.digitThree %10}</div>
           <div className="two">{props.digitTwo %10}</div>
           <div className="one">{props.digitOne % 10}</div>       
    </div>);
};

SimpleCounter.protoType = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    dogitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};
  
let counter =0;
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);
//render your react application
  counter++;
 ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
     document.querySelector("#app")
 );
},1000);