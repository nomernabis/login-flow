import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { setToken } from "../actions"
import { connect } from "react-redux"

import Login from "./pages/Login"
import Main from "./pages/Main"
import PrivateRoute from "./PrivateRoute"

import "../styles/App.css"

class App extends Component{

    componentDidMount(){
        const { dispatch } = this.props
        const token = localStorage.getItem('token')

        if(token && token !== "undefined"){
            dispatch(setToken(token))
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/" component={Main}  />
                </Switch>
            </Router>
        )
    }
}

export default connect()(App)
