import React from 'react'
import classes from "./NutritionTarget.module.css";

const NutritionTarget = (props) => {
  const {data}=props;
  return (
    <>
        <span className={classes.targetFont}>{data && data.calorieTarget}K</span><span className={classes.targettextSize}><br />target</span>
    </>
  )
}

export default NutritionTarget