import styled from "styled-components";
export const Footers = styled.footer`
padding: 5%;
background:#222222;
color: #fff
`

export const SocialiIcon = styled.div`
padding:10px;
border-radius: 10px;
display:flex;
justify-content: space-around;
    width: 20%;
    margin: 0px auto;
    @media screen and (max-width: 800px) {
        width: 50%;

    }
    img{
        cursor:pointer;
    }
`
export const Copyright = styled.div`
padding:10px;
display:flex;
justify-content: space-between;
    width: 100%;
    margin: 0px auto;
    & > a{
text-decoration:none;
color: #fff;
text-transform:capitalize;
    }
    &>span{
        text-transform:capitalize;
        opacity:0.7;
    }
`
