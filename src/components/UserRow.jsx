import React from 'react'
import Card from './Card';
import Heading from './Heading';
import classes from "./UserRow.module.css";
import img from "../assests/img.jpg";
const usersData = [
    {
        userId:1,
        imgurl:"https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg",
        name:"Charvie Sharma",
        email:"charviesharma@gmail.com",
        stepswalked:"2547",
        stepstarget:"4",
        performedDate:"15 Oct",
        scheduledDate:"22 Oct",
        calorieIntake:"2547",
        calorieTarget:"2.5",
        proteinConsumed:"45g",
        proteinTarget:"70g",
        carbConsumed:"50g",
        carbTarget:"70g",
        fatConsumed:"30g",
        fatTarget:"70g" 
    },
    {
        userId:2,
        imgurl:`${img}`,
        name:"Cherry Shukla",
        email:"cherryshukla@gmail.com",
        stepswalked:"2877",
        stepstarget:"6",
        performedDate:"12 Oct",
        scheduledDate:"20 Oct",
        calorieIntake:"2877",
        calorieTarget:"3.5",
        proteinConsumed:"55g",
        proteinTarget:"70g",
        carbConsumed:"60g",
        carbTarget:"70g",
        fatConsumed:"50g",
        fatTarget:"70g" 
    },
    {
        userId:3,
        imgurl:"https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Chavie Gupta",
        email:"chaviegupta@gmail.com",
        stepswalked:"4347",
        stepstarget:"5",
        performedDate:"13 Oct",
        scheduledDate:"27 Oct",
        calorieIntake:"2347",
        calorieTarget:"4.5",
        proteinConsumed:"65g",
        proteinTarget:"70g",
        carbConsumed:"40g",
        carbTarget:"70g",
        fatConsumed:"20g",
        fatTarget:"70g" 
    }
];

const UserRow = () => {
  return (
    <div className={classes.userrow}>
        <Heading />
        <div className={classes.cards}>
            {usersData.map(data=>{
                return(
                    <>
                        <Card data={data} />
                    </>
                ) 
            })}
            {/* <Card /> */}
        </div>
    </div>
  )
}

export default UserRow