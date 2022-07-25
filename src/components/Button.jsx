import React from 'react'
import classes from "./Button.module.css"

const Button = (props) => {
  const {data}=props;
  const feedback=data?.feedback;
  return (
    <><div className={classes.button} style={{top:`${props.top}`, left:`${props.left}`, backgroundColor:feedback===true ? "#da012d" : ""}}>{feedback===true ? <i class={`fa-solid fa-exclamation ${classes.iconposition}`}></i> : <i class={`fa-solid fa-lg fa-angle-right ${classes.iconposition}`}></i>}</div></>
  )
}

export default Button