import React from 'react'
import Button from './Button';
import classes from "./Workout.module.css";
const Workout = (props) => {
  const {data}=props;

  const currDate=new Date().getDate();
  const scheduleDate=data?.scheduleDate;
  return (
    <>
        <div className={classes.dates}>
            <div className={classes.performedDate}><i class="fa-solid fa-lg fa-user-check"></i> <span className={classes.performancedatespace}>{data.performedDate} Oct</span></div>
            <div className={currDate===scheduleDate ? classes.scheduleDateRed : classes.scheduledDate}><i class="fa-solid fa-lg fa-calendar-days"></i> <span className={classes.scheduledatespace}>{data.scheduledDate} Oct</span></div>
        </div>
        <Button top="-30px" left="25px" data={data}  />
    </>
  )
}

export default Workout