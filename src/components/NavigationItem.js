import React from "react"

import "../styles/NavigationItem.css"

export const NavigationItem = ({ text, isActive }) => {
    let classes = "navigation-item "
    if(isActive){
        classes += "nav-active"
    }
    return (
        <a href="#" className={classes}>
           {text}
        </a>
    )
}