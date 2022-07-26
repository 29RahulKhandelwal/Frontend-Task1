import React from 'react'
import {Routes, Route} from "react-router-dom"
import classes from './App.module.css';
import RouteDisplay from './components/RouteDisplay';
import UserRow from './components/UserRow'


const App = () => {
  return (
    <div className={classes.main}>
      <Routes>
        <Route exact path="/" element={<UserRow />} />
        <Route exact path="/workout/1" element={<RouteDisplay />} />
        <Route exact path="/workout/2" element={<RouteDisplay />} />
        <Route exact path="/workout/3" element={<RouteDisplay />} />
        <Route exact path="/nutrition/1" element={<RouteDisplay />} />
        <Route exact path="/nutrition/2" element={<RouteDisplay />} />
        <Route exact path="/nutrition/3" element={<RouteDisplay />} />
      </Routes>
      

    </div>
  )
}

export default App