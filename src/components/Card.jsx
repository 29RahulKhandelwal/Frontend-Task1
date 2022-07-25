import React, { useState } from 'react'
import Button from './Button';
import classes from "./Card.module.css";
import CircularBar from './CircularBar';
import NutritionTarget from './NutritionTarget';
import PieChartDiagram from './PieChartDiagram';
import StepsTarget from './StepsTarget';
import User from './User';
import Workout from './Workout';

const Card = (props) => {
    const {data}=props;
    const [stepsTarget,setStepsTarget]=useState([]);
    const [isToggle,setIsToggle]=useState(false);

    function handleStepsTarget(data){
        return setStepsTarget(data);
    }

    function handleToggle(){
        setIsToggle(true)
    }

  return (
    <div className={classes.card} key={data.userId}>
        <User data={data} />
        <div className={classes.usersteps} key={data.userId}>
            <CircularBar data={data} stepstargetData={stepsTarget} />
            <StepsTarget data={data} stepstargetData={handleStepsTarget} />
        </div>
        <div className={classes.userworkout}>
            <Workout data={data} />
        </div>
        <div className={classes.usernutrition}>
            <PieChartDiagram data={data} />
            <NutritionTarget data={data} />
            <Button top="16px" left="22px" />
        </div>
        <div className={classes.usernotification}>
            <i class={`fa-regular fa-2x fa-bell ${classes.bell}`}></i>
        </div>
        <div className={classes.toggle}>
            <i class="fa-solid fa-angle-down fa-2x" onClick={handleToggle}></i>
        </div>
        {/* {isToggle && <div className={classes.newCard}></div>} */}
    </div>
  )
}

export default Card