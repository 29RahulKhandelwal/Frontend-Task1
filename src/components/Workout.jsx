import React from 'react'
import classes from "./Workout.module.css";
import WorkoutButton from './WorkoutButton';
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
        <WorkoutButton top="-30px" left="25px" data={data} user={data.userId} />
    </>
  )
}

export default Workout