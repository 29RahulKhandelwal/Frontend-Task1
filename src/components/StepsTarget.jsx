import React, { useState } from 'react'
import PlusMinusButoon from './PlusMinusButoon';
import classes from "./StepsTarget.module.css";

const StepsTarget = (props) => {
  const {data}=props;
  const [target,setTarget]=useState(data.stepstarget)

  function handleAddClick(){
    setTarget(target+.5)
  }
  function handleMinusClick(){
    setTarget(target-.5)
  }

  props.stepstargetData(target)

  return (
    <div className={classes.target} key={data.userId}>
        <PlusMinusButoon onClick={handleAddClick} text="+" />
        <span className={classes.targetFont}>{target}K</span><span className={classes.targettextSize}><br />target</span>
        <PlusMinusButoon onClick={handleMinusClick} text="-" />
    </div>
  )
}

export default StepsTarget