import React from "react";
import { Abouts, Content, Img, ImgAbout, Para } from "./abouts";
import img1 from "./../images/desktop/image-interactive.jpg";

const About = () => {
  return (
   <>
    <Abouts>
      <ImgAbout>
        <Img src={img1} alt="" />
      </ImgAbout>
      <Content>
        <h1>the learned in interactive VR </h1>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          officiis sequi vero exercitationem, explicabo dolores laudantium. Unde
          magni cupiditate cumque!
         </Para>{/*text one "} */}
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et in
          placeat eos recusandae at dolore necessitatibus earum. Delectus, porro
          placeat nostrum eveniet officia error?{/*" text two "*/}
        </Para>
      </Content>
    </Abouts>
   </>
  );
};
export default About;
