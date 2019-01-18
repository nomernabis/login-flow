import React, { Component } from "react"
import { fetchLogin } from "../../actions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import "../../styles/Login.css"

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.token && prevProps.token !== this.props.token){
            localStorage.setItem('token', this.props.token)
            this.props.history.push('/')
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.dispatch(fetchLogin(this.state))
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
       return (
            <div className="flex-container flex-center flex-column full-height">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" onChange={this.handleChange}></input><br />
                    <input name="password" type="password" onChange={this.handleChange}></input><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
       )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default withRouter(connect(mapStateToProps, null)(Login))