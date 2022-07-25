import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import './CircularBar.css'

const CircularBar = (props) => {
  const {data}=props;
  const {stepstargetData}=props;

  const {stepswalked}=data;
  const progress=(stepswalked*100)/stepstargetData*1000;
  const finalProgress=progress.toString()[0]+progress.toString()[1]

  return (
    <div style={{ width: 80, height: 80, position:"relative", top:"-22px", left:"-10px" }}>
        <CircularProgressbarWithChildren value={finalProgress} styles={buildStyles({rotation:0.25, pathColor:"lightGreen", textColor:"#fff"})}>
            <div className='text' style={{fontSize:15, fontWeight:"600", marginTop:"-4px", color:"#fff"}}>{data.stepswalked}</div>     
            <div className='text' style={{fontSize:10, marginTop:"0px", color:"#A9A9A9"}}>walked</div>     
        </CircularProgressbarWithChildren>
    </div>
  )
}

export default CircularBar