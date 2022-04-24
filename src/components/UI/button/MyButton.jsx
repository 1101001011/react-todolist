import React from "react";
import classes from './MyButton.module.css'

const MyButton = ({children, btnType, ...props}) => {
    return (
        <button 
            className={btnType==="add" ? classes.made__button : classes.delete__button} {...props}>
            {children}
        </button>
    )
}

export default MyButton