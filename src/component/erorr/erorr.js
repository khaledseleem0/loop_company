import React from "react";
import {NavLink} from "react-router-dom";
import {Container,Containerimg,Heading} from  './erorrs.js';
import styled from 'styled-components';
const Ancors = styled(NavLink)`
        text-decoration:none;
        color: #fff;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:200%;
`
const Erorr =()=>{
    return(
        <Container>
            <Containerimg>
            <Heading> Erorr 404 page not found now   </Heading>
            <Ancors to="/" >  let's go home  </Ancors>

            </Containerimg>
        

        </Container>
    )
}
export default Erorr;