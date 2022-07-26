import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./Button.module.css"

const NutritionButton = (props) => {
  const {data,user}=props;
  const feedback=data?.feedback;

  return (
    <>
      {user > 0 && <Link to={`/nutrition/${user}`}>
      <div className={classes.button} style={{top:`${props.top}`, left:`${props.left}`, backgroundColor:feedback===true ? "#da012d" : ""}}>
        <a>
          {feedback===true ? <i class={`fa-solid fa-exclamation ${classes.iconposition}`}></i> : <i class={`fa-solid fa-lg fa-angle-right ${classes.iconposition}`}></i>}
        </a>
      </div>
    </Link>}
    </>
  )
}

export default NutritionButton