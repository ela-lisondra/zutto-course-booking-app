import React, {useState} from 'react'

// import App.css
import './App.css'


// Components
import Home from'./pages/home'
import NavBar from './components/NavBar'
import Courses from './pages/courses'
import Register from './pages/register'
import Login from './pages/login'
import Logout from './pages/logout'
import CreateCourse from './pages/createCourse'
import ErrorPage from './pages/errorPage'

import {Container} from 'react-bootstrap'

import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'

import {UserProvider} from './userContext'

export default function App(){

/*
  Fragment <></> is a React provided element wrapper.
*/
const [user, setUser] = useState({

  email: localStorage.getItem('email'),
  isAdmin:localStorage.getItem('isAdmin')=== "true"
})

const unsetUser = () => {
  localStorage.clear()

  setUser({
    email: null,
    isAdmin: null
  })
}

  return (
    <>
      <UserProvider value={{user,setUser,unsetUser}}>
        <Router>
          <NavBar />
          <Container>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/courses" component={Courses}/>
            <Route exact path="/courses/create" component={CreateCourse}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/logout" component={Logout}/>
            <Route component={ErrorPage} />
          </Switch>
          </Container>
        </Router>
      </UserProvider> 
    </>
    )

}