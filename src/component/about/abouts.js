import styled from "styled-components";
export const AboutContainer = styled.div `
padding: 200px 0;

& > div{
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
 }
  @media screen and (max-width: 900px) {
    height: auto;
    &>div {
      flex-flow:column;
  }
`

export const ImgAbout = styled.div `
    width: 70%;
@media screen and (max-width: 900px) {
    width: 100%;
    position:relative;
  }
}
`

export const Img = styled.img `
  width: 100%;

`

export const Content = styled.div `
     max-width: 500px;
    text-align: center;
    background-color: #fff;
    bottom: 0;
    transform: translate(-40%,50%);
    padding: 50px;
h1{
color:#444

}
@media screen and (max-width: 900px) {
    width: 100%;
    transform: translate(0%,0%);

}
`
export const Para = styled.p `
    line-height: 23px;
    padding: 5%;
    padding: .5rem;
    color: #8c8c8c;
    font-size: .875rem;
    text-align: center;
    word-spacing: .25rem;
    font-family: Alata;
    `

