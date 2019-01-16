import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Login from "./pages/Login"
import Main from "./pages/Main"

import "../styles/App.css"

class App extends Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Main} />
                </Switch>
            </Router>
        )
    }
}

export default App
