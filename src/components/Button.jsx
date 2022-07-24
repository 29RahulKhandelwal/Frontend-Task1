import React from 'react'
import classes from "./Button.module.css"

const Button = (props) => {
  return (
    <><div className={classes.button} style={{top:`${props.top}`, left:`${props.left}`}}><i class={`fa-solid fa-lg fa-angle-right ${classes.iconposition}`}></i></div></>
  )
}

export default Button