import React, { Component} from "react";
import './SiginUp.css';
import {Link} from "react-router-dom";

class Siginup extends Component {
     Checker = ()=>{
        const pass = document.querySelectorAll('input')[3].value;
        const container = document.querySelectorAll('.siginup .container')[0];
       if(pass ==='Admin'){
           container.style.animationName='falsecheck';
           container.style.boxShadow="rgb(237 44 73 / 24%) 0px 4px 15px 0px, rgb(255 0 0 / 39%) 0px 1px 12px 0px, rgb(237 44 73) 0px 2px 0px 0px inset"
       }else if(pass === 'User'){
        container.style.animationName='truecheck';
        container.style.boxShadow="rgb(12 255 63 / 34%) 0px 4px 15px 2px, rgb(28 228 42 / 63%) 0px 1px 2px 0px, rgb(84 237 44 / 50%) 0px 2px 0px 0px inset";

       }else{
        container.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 15px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(237, 44, 73, 0.5) 0px 2px 0px 0px inset";

       }

     }
  render(){
    return(
        <div className='siginup'>
                <h1>join to us now  &#10084;</h1>

        <form action="" className="container">
  <label htmlFor="">
      your first name 
  </label>
        <input type="text"/>
        <span></span>

  <label htmlFor="">
      your last name 
  </label>
        <input type="text"/>
        <span></span>

  <label htmlFor="">
      your email name 
  </label>
  <input type="email"/>
  <span></span>

  <label htmlFor="">
        type your password 
  </label>
  <input type="password" onInput={this.Checker}/>
  <span></span>

  <label htmlFor="">
      confirm your password 
  </label>
  <input type="password"/>
<span></span>
        <input type='submit' value="sigin now"/>
        <Link to="/sigin">have account ?</Link>
        </form>
        </div>
    )
  }

}
export default Siginup;
