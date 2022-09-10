import styled from "styled-components";
export const Container = styled.div `
    margin: 5%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    position: relative;
    clear: both;
    overflow: hidden;
    gap:25px;
    clear: both;
    @media screen and (max-width: 700px) {
        grid-template-columns: auto auto  ;

    }@media screen and (max-width: 400px) {
        grid-template-columns: auto ;
        height:30vh;
    }
`
export const Headerimg  = styled.div`
display: flex;
justify-content:end;
text-transform: uppercase;
display: flex;
justify-content: space-between;
padding:5% 5% 1% 5%;
clear: both;
`
export const TitleHeaderImg  = styled.span`
font-size:2em;
`
export const BtnHeaderImg  = styled.button`
border:1px solid #333;
background :#ffff;
text-transform:uppercase;
padding: 10px 15px;
`
export const Img = styled.img`
width:100%;
height:100%;

`
export const  ImgContainer  = styled.div`
position:relative
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
        & > span{
            color:#fff;
       font-size:1em;
       transform:translateY(500%);
       transition:all .45s ease-in-out;
       text-transform:uppercase;
       opacity:0;
        }
        &:hover > span{
       transform:translateY(0%);
       opacity:1;


    }
    `