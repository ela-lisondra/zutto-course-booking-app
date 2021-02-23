import React from 'react'

// import App.css
// import './App.css'


// Components
import Home from'./pages/home'
import NavBar from './components/NavBar'
import Courses from './pages/courses'
import Register from './pages/register'
import Login from './pages/login'

import {Container} from 'react-bootstrap'

export default function App(){

/*
  Fragment <></> is a React provided element wrapper.
*/


  return (
    <>
      <NavBar />
      <Container>
         <Login />
      </Container>
    </>
    )

}