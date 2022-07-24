import React from 'react'
import classes from "./StepsTarget.module.css";

const StepsTarget = (props) => {
  const {data}=props;
  return (
    <>
        <span className={classes.targetFont}>{data && data.stepstarget}K</span><span className={classes.targettextSize}><br />target</span>
    </>
  )
}

export default StepsTarget