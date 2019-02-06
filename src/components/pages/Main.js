import React, { Component } from "react"
import { connect } from "react-redux"
import { setToken } from "../../actions"
import { Route } from "react-router-dom"

import "../../styles/Main.css"

import NavigationBar from "../NavigationBar"
import Content from "../Content"

class Main extends Component{
    render(){
        return (
            <div className="full-height flex-container flex-column">
                <div className="header">
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem('token')
                        this.props.dispatch(setToken(undefined))
                    }}>Logout</a>
                </div>
                <div style={{display: "flex", flexDirection: "row", height: "100%"}}>
                    <NavigationBar items={[{name: 'Categories', route: '/'}, {name: 'Products', route: '/products'}, { name: 'Attributes', route: '/attributes'}]} />
                    <Route component={Content} />
                </div>
            </div>
        )
    }
}

export default connect()(Main)