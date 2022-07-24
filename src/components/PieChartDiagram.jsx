import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import classes from "./PieChartDigram.module.css";

const PieChartDiagram = (props) => {
    const {data}=props;
    return (
        <div className={classes.pieChart}>
            <PieChart lineWidth={20} 
                data={[
                    { title: 'One', value: 15   , color: '#E38627' },
                    { title: 'Two', value: 10, color: '#ADD8E6' },
                    { title: 'Three', value: 12, color: '#6A2135' },
                ]}
            >
            </PieChart>
            <div className={classes.pieChartText} style={{color:"#FFF"}}>
                <span className={classes.number}>{data.calorieIntake}</span>
                <br/>
                <span className={classes.text}>Calories</span>
            </div>
        </div>
    )
}

export default PieChartDiagram