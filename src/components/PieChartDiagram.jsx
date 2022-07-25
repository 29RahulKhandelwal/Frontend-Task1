import React, { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import classes from "./PieChartDigram.module.css";
import ToolTip from './ToolTip';

const PieChartDiagram = (props) => {
    const {data}=props;
    const protein=data.proteinConsumed;
    const carbs=data.carbConsumed;
    const fat=data.fatConsumed;

    const [mouseOver,setMouseOver]=useState(false);

    function handleMouseOver(){
        setMouseOver(true);
    }
    function handleMouseOut(){
        setMouseOver(false);
    }

    return (
        <div className={classes.pieChart} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <PieChart lineWidth={20} 
                data={[
                    { title: 'One', value: protein   , color: '#E38627' },
                    { title: 'Two', value: fat, color: '#ADD8E6' },
                    { title: 'Three', value: carbs, color: '#6A2135' },
                ]}
            >
            </PieChart>
            {mouseOver && <ToolTip data={data} />}
            <div className={classes.pieChartText} style={{color:"#FFF"}}>
                <span className={classes.number}>{data.calorieIntake}</span>
                <br/>
                <span className={classes.text}>Calories</span>
            </div>
        </div>
    )
}

export default PieChartDiagram