import React from "react"

import "../styles/NavigationItem.css"

export const NavigationItem = ({ name, isActive, onClicked }) => {
    let classes = "navigation-item "
    if(isActive){
        classes += "nav-active"
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault()
            onClicked()
        }} className={classes}>
           {name}
        </a>
    )
}