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
        stepstarget:4,
        performedDate:15,
        scheduledDate:25,
        calorieIntake:"2547",
        calorieTarget:2.5,
        calorieName1:"PROTEIN",
        proteinConsumed:45,
        proteinTarget:"70g",
        calorieName2:"CARBS",
        carbConsumed:50,
        carbTarget:"70g",
        calorieName3:"FATS",
        fatConsumed:30,
        fatTarget:"70g",
        feedback:true
    }
    ,
    {
        userId:2,
        imgurl:`${img}`,
        name:"Cherry Shukla",
        email:"cherryshukla@gmail.com",
        stepswalked:"2877",
        stepstarget:6,
        performedDate:12,
        scheduledDate:20,
        calorieIntake:"2877",
        calorieTarget:3.5,
        calorieName1:"PROTEIN",
        proteinConsumed:55,
        proteinTarget:"70g",
        calorieName2:"CARBS",
        carbConsumed:60,
        carbTarget:"70g",
        calorieName3:"FATS",
        fatConsumed:50,
        fatTarget:"70g",
        feedback:true 
    },
    {
        userId:3,
        imgurl:"https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name:"Chavie Gupta",
        email:"chaviegupta@gmail.com",
        stepswalked:"4347",
        stepstarget:5,
        performedDate:13,
        scheduledDate:27,
        calorieIntake:"2347",
        calorieTarget:4.5,
        calorieName1:"PROTEIN",
        proteinConsumed:65,
        proteinTarget:"70g",
        calorieName2:"CARBS",
        carbConsumed:40,
        carbTarget:"70g",
        calorieName3:"FATS",
        fatConsumed:20,
        fatTarget:"70g",
        feedback:false 
    }
];

const UserRow = (props) => {
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