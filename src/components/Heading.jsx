import React from 'react'
import classes from "./Heading.module.css";

const Heading = () => {
  return (
    <>
        <div className={classes.heading}>
            <div className={classes.steps}><i class={`${classes.fa} fa-solid fa-person-running`}></i> Steps</div>
            <div className={classes.workout}><i class={`${classes.fa} fa-solid fa-dumbbell ${classes.dumbbell}`}></i> Workout</div>
            <div className={classes.nutrition}><i class={`${classes.fa} fa-solid fa-bell-concierge`}></i> Nutrition</div>
        </div>
    </>
  )
}

export default Heading