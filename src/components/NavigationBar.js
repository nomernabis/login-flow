import React, { Component } from "react"
import "../styles/NavigationBar.css"

import { NavigationItem } from "./NavigationItem"
import { withRouter } from "react-router-dom"

class NavigationBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { pathname } = this.props.location
        const { items, history } = this.props
        return (
            <div className="navigation-bar">
                {items.map(item => <NavigationItem onClicked={() => history.push(item.route)}  {...item} isActive={item.route === pathname} />)}
            </div>
        )
    }
}

export default withRouter(NavigationBar)