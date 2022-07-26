import React from 'react'
import {Link} from "react-router-dom";
import classes from "./RouteDisplay.module.css";

const RouteDisplay = () => {
  return (
    <div className={classes.route}>
        <p>Route Display</p>
        <Link to="/">
            <button className={classes.btn}>Back</button>
        </Link>
    </div>
  )
}

export default RouteDisplay