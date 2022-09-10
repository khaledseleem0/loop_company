import styled from 'styled-components';

export const Hero = styled.div
` background-image: linear-gradient(45deg, black, transparent),url(./../../images/desktop/image-hero.jpg);;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  padding: 5%;
  color:#fff
`

export const Content = styled.div
 `
  width: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border:2px solid #fff;
  padding:5%;
  text-transform:uppercase;
`