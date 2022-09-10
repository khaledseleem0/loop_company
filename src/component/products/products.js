import styled from "styled-components";
export const Container = styled.div `    
display:grid;
padding:5%;
background:#aac7d130;
grid-template-columns: auto auto auto auto;
@media screen and (max-width:700px){
    grid-template-columns: auto auto ;

}
@media screen and (max-width:500px){
    grid-template-columns: auto ;

}
gap:10px;

`  
export const Img = styled.img `    
width: 100%;
transition:all .45s ease-in-out;
` 
export const Card = styled.div `  
display: inline-table;  
background:#fff;
padding:10px;
overflow: hidden;
box-shadow:rgba(0,0,0,0.1) 0px 4px 15px 0px, rgba(0,0,0,0.1) 0px 1px 2px 0px, #0a35ff42 0px 2px 0px 0px inset;
` 
export const Title = styled.span `    
background:#fff;
padding:10px;
display:block;
transform:translateY(300%);
transition:all .45s ease-in-out;
` 
export const ImgContainer = styled.div`
position:relative;
overflow: hidden;

&:after{
    background-image:linear-gradient(45deg,rgb(26 14 244 / 31%),rgb(238 219 219 / 24%));
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    transition:all .45s ease-in-out;
}
&:hover:after{
    opacity:0.5;
}
&:hover + span{
   transform:translateY(0%);
}&:hover > img{
    transform: scale(1.5);
}
`