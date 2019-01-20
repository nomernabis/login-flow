import React from "react"
import "../styles/NavigationBar.css"

import { NavigationItem } from "./NavigationItem"

export const NavigationBar = () => {
    const items = [{text: 'Home', isActive: true}, {text: 'Users'}, {text: 'Products'},{text: 'Other'}]
    return (
        <div className="navigation-bar">
            {items.map(item => <NavigationItem {...item} />)}
        </div>
    )
}