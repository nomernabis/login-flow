import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        rest.token ? <Component {...props} /> : <Redirect to="/login" />
    )} />
)

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, null)(PrivateRoute)