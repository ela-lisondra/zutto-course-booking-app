import React from 'react'

// import App.css
// import './App.css'


// Components
import Home from'./pages/home'
import Banner from './components/Banner'
import Highlights from './components/Highlights'
import NavBar from './components/NavBar'
import {Container} from 'react-bootstrap'

export default function App(){

/*
  Fragment <></> is a React provided element wrapper.
*/


  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
    )

}