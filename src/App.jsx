import React from 'react'
import classes from './App.module.css';
import UserRow from './components/UserRow'

const App = () => {
  return (
    <div className={classes.main}>
      <UserRow />
    </div>
  )
}

export default App