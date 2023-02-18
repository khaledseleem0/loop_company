import styled from 'styled-components';

export const HeroContainer = styled.div`
background-image: linear-gradient(180deg, rgba(0,0,0,0.64),  rgba(0,0,0,0.3)),url("/images/cairokee-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 5%;
  color:#fff;
`

export const Content = styled.div`
  width: 500px;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  @media screen and (max-width:900px) {
    max-width:90% !important;

  }
 p{
  padding: 20px 0;
line-height: 23px;
 }
 button{
  padding: 8px 20px;
background: transparent;
border: 1px solid #e14141;
border-radius: 32px;
outline: none;
color: #fff;
background: #e14141;
letter-spacing: 2px;
cursor: pointer;
transition: all 0.5s;
&:hover{
  box-shadow: 0 0 5px 5px #e1414142;
  translate: 0 -4px;
  letter-spacing: 3px;

}
 }
`
export const BigText = styled.h1`
font-size:46px;
@media screen and (max-width:900px) {
  font-size:36px;  
}
span{
  color:#e14141;
}
`