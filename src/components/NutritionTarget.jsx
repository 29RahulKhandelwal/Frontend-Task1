import React, { useState } from 'react'
import classes from "./NutritionTarget.module.css";
import PlusMinusButoon from './PlusMinusButoon';

const NutritionTarget = (props) => {
  const {data}=props;
  const [target,setTarget]=useState(data.calorieTarget)

  function handleAddClick(){
    setTarget(target+.1)
  }
  function handleMinusClick(){
    setTarget(target-.1)
  }

  return (
    <div className={classes.target}>
        <PlusMinusButoon onClick={handleAddClick} text="+" />
        <span className={classes.targetFont}>{target}K</span><span className={classes.targettextSize}><br />target</span>
        <PlusMinusButoon onClick={handleMinusClick} text="-" />
    </div>
  )
}

export default NutritionTarget