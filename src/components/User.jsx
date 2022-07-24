import React from 'react'
import classes from "./User.module.css";

const User = (props) => {
  const {data}=props;
  return (
    <div className={classes.user} key={data.userId}>
        <div className={classes.userimg}>
            <img className={classes.img} src={data.imgurl} alt="user-img" />
        </div>
        <div className={classes.username}>
            <div className={classes.name}>{data.name}</div>
            <div className={classes.email}>{data.email}</div>
        </div>
    </div>
  )
}

export default User