import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const PrivateRoute = ({component: Component, ...rest}) => {
   return (
        <Route {...rest} render={(props) => {
            console.log("token route", Component)
            return (
                rest.token ? <Component {...props} /> : <Redirect to="/login" />
            )
        }} />
   )
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, null)(PrivateRoute)