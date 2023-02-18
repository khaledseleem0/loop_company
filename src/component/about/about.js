import React from "react";
import { AboutContainer, Content, Img, ImgAbout, Para } from "./abouts";

const About = () => {
  return (
   <div className="container">
    <AboutContainer>
      <div>
      <ImgAbout>
        <Img src={process.env.PUBLIC_URL+"./images/desktop/image-interactive.jpg"} alt="" />
      </ImgAbout>
      <Content>
        <h1> THE LEADER IN INTERACTIVE VR </h1>

        <Para>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.

        
        </Para>
       
      </Content>
      </div>
    </AboutContainer>
   </div>
  );
};
export default About;
