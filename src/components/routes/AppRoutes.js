import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import { LoginPage, MainPage } from "../pages"
import PrivateRoute from "./PrivateRoute"

const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/" component={MainPage} />
        </Switch>
    </Router>
)

export default AppRoutes