import React, { Component } from "react"
import { fetchLogin, clearError } from "../../actions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Field from "../ui/forms/Field"
import { newErrorObj } from "../../utils"

import "../../styles/Login.css"

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            error: {
                username: '',
                password: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.token && prevProps.token !== this.props.token){
            localStorage.setItem('token', this.props.token)
            this.props.history.push('/')
        }
    }


    handleSubmit(e){
        e.preventDefault()
        if(this.validate()){
            this.props.dispatch(fetchLogin(this.state))
        }
    }

    handleChange(e){
        const { dispatch } = this.props
        if(this.props.error){
            dispatch(clearError())
        }
        this.setState({[e.target.name]: e.target.value, error: {}})
    }

    validate(){
        let error = {}
        if(this.state.username == ''){
            error.username = "Empty field"
        } else {
            if(this.state.username.length < 5){
                error.username = "Too short"
            } else if (this.state.username > 10){
                error.username = "Too long"
            }
        }
        if(this.state.password == ''){
            error.password = "Empty field"
        } else {
            if(this.state.password.length < 5){
                error.password = "Too short"
            } else if (this.state.password > 10){
                error.password = "Too long"
            }
        }

        this.setState({...this.state, error})
        return !error.username && !error.password
    }


    render(){
        const { isFetching } = this.props
        const error = newErrorObj(this.props.error)
        return (
                <div style={{ opacity: isFetching ? 0.5 : 1}} className="flex-container flex-center flex-column full-height">
                    <h1>Login</h1>
                    {error && <span>{error.global}</span>}
                    <form onSubmit={this.handleSubmit}>
                        <Field name="username" label="Username" type="text" value={this.state.username} onChange={this.handleChange} error={(error && error.username) || this.state.error.username} />
                        <Field name="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange} error={(error && error.password) || this.state.error.password} />
                        <input disabled={isFetching} type="submit" value="Submit" />
                    </form>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    error: state.auth.error,
    isFetching: state.auth.isFetching
})

export default withRouter(connect(mapStateToProps, null)(Login))