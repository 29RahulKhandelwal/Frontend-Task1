import React from 'react'
import MacrosCircularBar from './MacrosCircularBar';
import classes from "./ToolTip.module.css";

const ToolTip = (props) => {
    const {data}=props;
  return (
    <div className={classes.tooltip}>
        <MacrosCircularBar data={data} />
    </div>
  )
}

export default ToolTip