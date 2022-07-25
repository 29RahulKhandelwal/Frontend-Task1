import React from 'react'
import classes from "./MacrosCircularBar.module.css";

const MacrosCircularBar = (props) => {
    const {data}=props;
    const proteinwidth=data.proteinConsumed+19;
    const carbwidth=data.carbConsumed+19;
    const fatwidth=data.fatConsumed+19;
  return (
    <div key={data.userId}>
        <div className={classes.circularbar}>
            <div className={classes.heading}>
                <span className={classes.title}>{data.calorieName1}</span>
                <span className={classes.targetprotein}>{data.proteinTarget}</span>
            </div>
            <div className={classes.progressbar} style={{color:"#E38627"}}>
                <div className={classes.progress} style={{width:`${proteinwidth}%`, backgroundColor:"#E38627"}}>Progress</div>
                {data.proteinConsumed}g
            </div>
        </div>
        <div className={classes.circularbar}>
            <div className={classes.heading}>
                <span className={classes.title}>{data.calorieName2}</span>
                <span className={classes.targetprotein}>{data.carbTarget}</span>
            </div>
            <div className={classes.progressbar} style={{color:"#ADD8E6"}}>
                <div className={classes.progress} style={{width:`${carbwidth}%`, backgroundColor:"#ADD8E6"}}>Progress</div>
                {data.carbConsumed}g
            </div>
        </div>
        <div className={classes.circularbar}>
            <div className={classes.heading}>
                <span className={classes.title}>{data.calorieName3}</span>
                <span className={classes.targetprotein}>{data.fatTarget}</span>
            </div>
            <div className={classes.progressbar} style={{color:"#6A2135"}}>
                <div className={classes.progress} style={{width:`${fatwidth}%`, backgroundColor:"#6A2135"}}>Progress</div>
                {data.fatConsumed}g
            </div>
        </div>
    </div>
  )
}

export default MacrosCircularBar