import React from 'react'
import classes from "./PlusMinusButoon.module.css";

const PlusMinusButoon = (props) => {
  return (
    <div>
        <button className={classes.plusminusbtn} onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default PlusMinusButoon