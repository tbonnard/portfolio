import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Switch,
  Route,
  Link,
  Redirect, useParams
} from "react-router-dom"


import Notification from "./components/Notification"
import LoginForm from './components/login/LoginForm'
// import AccountForm from './components/login/AccountForm'
import UserInfo from './components/login/UserInfo'
import Header from './components/navigation/Header'

import Intro from './components/visitor/Intro'
import Education from './components/education/Education'
import WeatherRandomForm from './components/meteo/WeatherRandomForm'
import VisitorForm from "./components/visitor/VisitorForm"
import Techno from './components/techno/Techno'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'


const App = () => {

  const user = useSelector(state => state.user)

  return (
    <div>

    <Header user={user}/>

      <Switch>   
        <Route path='/profile'>
            {user === null? <Redirect to="/signin" /> : <UserInfo /> }         
          </Route>

          <Route path='/signin'>
            {user === null ? <div><LoginForm /><Notification /></div> : <Redirect to="/profile" />}         
          </Route>

          {/* <Route path='/signup'>
            {user === null ? <div><AccountForm /><Notification /></div>  : <Redirect to="/profile" />}         
          </Route> */}

          <Route path='/weather'>
            <WeatherRandomForm />
          </Route>

          <Route path='/visitor'>
            <VisitorForm />
          </Route>

          <Route path='/' >
            <Intro />
            <Techno />
            <Education />
            <Project />
            <Contact />
          </Route>

      </Switch>

      <Notification />

    </div>
  )
}

export default App;
