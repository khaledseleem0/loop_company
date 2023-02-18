import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.scss";
export default function Nav() {
  const location = useLocation();
  const [isNavActive, setIsNavActive] = useState(false);
  const [scroll, SetScroll] = useState(false);
  window.onscroll = function () {
    SetScroll(false);
    if (window.pageYOffset > 50) {
      SetScroll("hero");
    }
    if (window.pageYOffset > window.innerHeight) {
      SetScroll(true);
    }
  }


  return (
    <div className="navbar" data-scroll={location.pathname == '/' && scroll}>
      <div className="container">
        <header>
          <h1 className="logo" >loop studios </h1>
          <div>
            <div className="burger hum_one" onClick={() => setIsNavActive(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="nav" data-nav={isNavActive}>
            <div className="sub-header">
              <div>
                <div className="burger hum_tow" onClick={() => setIsNavActive(false)}>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <h1 className="logo2">loop studios</h1>

            </div>
            <div className="links">
              <Link to='/'>home</Link>
              <Link to='/products'>products</Link>
              <Link to='/erorr'>support</Link>

            </div>
            <div className="regs">
              <Link to='/login'>login</Link>
              <Link to='/signup'>signup</Link>
            </div>
          </div>
        </header>
      </div></div>
  );
}

