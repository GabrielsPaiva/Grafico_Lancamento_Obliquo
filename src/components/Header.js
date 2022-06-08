import React from "react";
import styled from "styled-components";

// images
import Logo from "../assets/logo.png"

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 12em;
`
const LogoImage = styled.img`
border-radius: 10px;
box-shadow: 1em 1em black;
width: 30%;
`

export default function Header(){

    return(
        <Div>
            <LogoImage src={Logo} alt=""/>
        </Div>
    )
}