import React from "react"
import Field from "../Field"
import FloatingActionButton from "../../FloatingActionButton"
import { ic_save } from "react-icons-kit/md"
import NumberSelect from "../../Table/NumberSelect"
import { fetchPostUser, showLoader, hideLoader, clearUserForm } from "../../../../actions"
import { connect } from "react-redux"
import { newErrorObj } from "../../../../utils"
import { withRouter } from "react-router-dom"

import { Api } from "../../../../utils"

class UserEditForm extends React.Component{
    constructor(props){
        super(props)
        
        let userId = this.props.match.params.id
        let user = this.props.users.filter(u => u.id == userId)[0]

        let userType
        if(user.user_type == 1){
            userType = {name: 'Admin', value: user.userType}
        } else {
            userType = {name: 'User', value: user.userType}
        }

        this.state = {
            error: {},
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone_number: user.phone_number,
            user_type: userType
        }
        this.onChange = this.onChange.bind(this)
        this.onUserTypeChanged = this.onUserTypeChanged.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    handleSubmit(){
        const { dispatch } = this.props
        if(this.validate()){
            const { username, first_name, last_name, email, user_type, phone_number } = this.state
            let userType = user_type.value
            Api.patch('users/' + this.props.match.params.id + '/',
                 {username, first_name, last_name, email, user_type: userType, phone_number})
                .then(response => this.props.history.push('/users'))
        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    onUserTypeChanged(user_type){
        this.setState({ user_type })
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

        this.setState({...this.state, error})
        return !error.username && !error.password
    }
    render(){
        const error = newErrorObj(this.props.error)
        return (
            <div>
                UserForm
                <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px",  boxShadow: 'rgba(118, 143, 255, 0.1) 0px 16px 24px 0'}}>
                    <Field type="text"
                             name="username" 
                             value={this.state.username} 
                             label="Username" 
                             onChange={this.onChange} 
                             error={(error && error.username) || this.state.error.username} />
                    <Field value={this.state.first_name} type="text" name="first_name" label="First Name" onChange={this.onChange}  />
                    <Field value={this.state.last_name} type="text" name="last_name" label="Last Name" onChange={this.onChange} />
                    <Field value={this.state.email} type="text" name="email" label="Email" onChange={this.onChange} error={(error && error.email) || this.state.error.email} />
                    <Field value={this.state.phone_number} type="text" name="phone_number" label="Phone" onChange={this.onChange} />
                    <NumberSelect onChange={this.onUserTypeChanged} text="User Type:" value={this.state.user_type} items={[{name: 'Admin', value: 1}, {name: 'User', value: 2}]} />
                </form>
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_add} action={this.handleSubmit} />
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.users.form.error,
    isFetching: state.users.isFetching,
    response: state.users.form.response,
    users: state.users.response.results
})

export default withRouter(connect(mapStateToProps)(UserEditForm))