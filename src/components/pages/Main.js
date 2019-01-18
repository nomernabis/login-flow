import React, { Component } from "react"
import { connect } from "react-redux"
import { setToken } from "../../actions"

import "../../styles/Main.css"


class Main extends Component{
    render(){
        return (
            <div>
                <div className="header">
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem('token')
                        this.props.dispatch(setToken(undefined))
                    }}>Logout</a>
                </div>
            </div>
        )
    }
}

export default connect()(Main)