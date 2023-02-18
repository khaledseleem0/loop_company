import styled,{keyframes} from "styled-components";
export const Header  = styled.div`
display: flex;
text-transform: uppercase;
justify-content: space-between;
padding:5% 5% 30px 5%; 

`

export const Container = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
    position: relative;
    clear: both;
    overflow: hidden;
    gap:25px;
    padding: 0 0 50px 0;
    @media screen and (max-width: 800px) {
        grid-template-columns: auto auto  ;

    }@media screen and (max-width: 400px) {
        grid-template-columns: auto ;
    }
`

export const TitleHeaderImg  = styled.span`
font-size:2em;
`
const ghost = keyframes`
  from {
    transform: scale(1.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const BtnHeaderImg  = styled.button`
border:1px solid #333;
background :#ffff;
text-transform:uppercase;
padding: 10px 15px;
position:relative;
color:#444;
z-index:0;
transition: all 0.3s ease-in-out;
cursor:pointer;
&:hover{
    color: #fff;
}
&:after{
    opacity:0;
    position:absolute;
    top: 0;
    right: 0;
    z-index: -1;
    content:'';
    width:100%;
    background: #444;
    height:100%;
    transition: all 0.3s ease-in-out;

}&:hover:after{
    animation: ${ghost} 0.3s  ease-in-out  ;
    opacity:1;
}
`
export const Img = styled.img`
width:100%;
height:100%;

`
export const  ImgContainer  = styled.div`
position:relative;
border-radius:10px;
overflow:hidden;
`
export const  ImgOverlay = styled.div`
 background-image: linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.5));;
    height:100%;
    width:100%;
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    overflow: hidden;
    justify-content: center;
    display: flex;
    align-items: center;
    transition:all .45s ease-in-out;
    &:hover{
        backdrop-filter: blur(5px);
    }
        & > span{
            color:#fff;
       font-size:1em;
       transform:translateY(500%);
       transition:all .45s ease-in-out;
       text-transform:uppercase;
       opacity:0;
       text-align:center;
        }
        &:hover > span{
       transform:translateY(0%);
       opacity:1;
        

    }
    `