import React from "react"
import styled, { createGlobalStyle } from "styled-components"

// components
import Header from "./components/Header"
import Main from "./components/Main"


const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
`
const AppGeneralBox = styled.div`
background: fixed url("https://thumbs.dreamstime.com/b/physics-science-seamless-pattern-background-book-light-bulbs-electric-circuits-models-atom-earth-magnetic-field-74933302.jpg");
`

export default class App extends React.Component{

  render(){
    return(
      <AppGeneralBox>
        <GlobalStyle/>
        <Header/>
        <Main/>
      </AppGeneralBox>
    )
  }
}