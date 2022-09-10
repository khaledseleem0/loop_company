import React, { Component } from "react";
// import {BrowserRouter,Route } from 'react-router-dom';
import Index from "./component/index/index";
import Erorr from "./component/erorr/erorr";
import Nav from "./component/nav/nav";
import Sigin from "./component/sigin/sigin";
import Siginup from "./component/SiginUp/SiginUp";
import Product from "./component/products/product";
import X from "./component/x";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />

             <Route  path='/sigin' element={<Sigin/>}/>
             <Route  path='/signup' element={<Siginup/>}/> 
            <Route   path='/:erorr' element={<Erorr/>}/> 

      </Routes>
    </Router>
  );
}

export default App;
