import React from "react";
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={classes.todo__input} {...props}/>
    )
}

export default MyInput