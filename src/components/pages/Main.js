import React, { Component } from "react"
import { connect } from "react-redux"
import { setToken } from "../../actions"

import "../../styles/Main.css"

import { NavigationBar } from "../NavigationBar"

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
                <NavigationBar />
            </div>
        )
    }
}

export default connect()(Main)