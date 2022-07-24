import React from 'react'
import Button from './Button';
import classes from "./Workout.module.css";
const Workout = (props) => {
  const {data}=props;
  return (
    <>
        <div className={classes.dates}>
            <div className={classes.performedDate}><i class="fa-solid fa-lg fa-user-check"></i> <span className={classes.performancedatespace}>{data.performedDate}</span></div>
            <div className={classes.scheduledDate}><i class="fa-solid fa-lg fa-calendar-days"></i> <span className={classes.scheduledatespace}>{data.scheduledDate}</span></div>
        </div>
        <Button top="-30px" left="25px" />
    </>
  )
}

export default Workout