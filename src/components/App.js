import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { setToken } from "../actions"
import { connect } from "react-redux"

import Login from "./pages/Login"
import Main from "./pages/Main"
import PrivateRoute from "./PrivateRoute"
import Modal from "./Modal"

import "../styles/App.css"

class App extends Component{
    
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute path="/" component={Main}  />
                    </Switch>
                </Router>
                <Modal />
            </div>
        )
    }
}

export default connect()(App)
