import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
export const Container  = styled.div`
    background-color: #334343;
    display:flex;
    justify-content:center;
    align-item:center;
    text-transform:capitalize;

`
export const Ancor = styled(NavLink)`
    text-decoration:none;
    height: 50%;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size:200%;
    padding-top: 50%;
    color:#fff
`
export const Containerimg  = styled.div`
    background-size:cover;
    object-fit: cover;
    height:100vh;
    display: flex;
    justify-content:center;
    flex-flow:column;
    padding: 0 20px ;
    background-position:center;
    background-repeat: no-repeat;

`
export const Heading  = styled.h1`
    color: #fff;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;

`
