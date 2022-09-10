import React from 'react';
import  './sigin.css';
import {Link} from "react-router-dom";

const  Sigin =()=> {
       const checker = ()=>{
        const pass = document.querySelectorAll('input')[2].value;
        const container = document.querySelectorAll('.home-content .container')[0];
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
        return(
                <div className='home-content'>
                <h1>Welcome back &#10084;</h1>
                <form className="container">
                <label htmlFor="">
                user name                         
                </label>
                <input type="text" name="" id="" placeholder="joen doe "/>
                <span></span>
                <label htmlFor="">
                E-mail                        
                </label>
                <input type="text" name="" id="" placeholder="joendoe@gmail.com "/>
                <span></span>

                <label htmlFor="">
                user password                         
                </label>
                <input type="password" name="" id="" placeholder="****** " onInput={checker}/>
                <span></span>

                     <button type="submit"> register now</button>
                     <Link to="/signup">don't have account ?</Link>

                </form>
                </div>
        )
    
}
export default Sigin;