import React from "react"
import Field from "../Field"
import FloatingActionButton from "../../FloatingActionButton"
import { ic_save } from "react-icons-kit/md"
import NumberSelect from "../../Table/NumberSelect"
import { fetchPostUser, showLoader, hideLoader, clearUserForm } from "../../../../actions"
import { connect } from "react-redux"
import { newErrorObj } from "../../../../utils"
import { withRouter } from "react-router-dom"

class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error: {},
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            user_type: {name: 'Admin', value: 1}
        }
        this.onChange = this.onChange.bind(this)
        this.onUserTypeChanged = this.onUserTypeChanged.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    handleSubmit(){
        const { dispatch } = this.props
        if(this.validate()){
            console.log('sending data')
            const { username, password, first_name, last_name, email, user_type, phone_number } = this.state
            dispatch(fetchPostUser({username, password, first_name, last_name, email, user_type: user_type.value, phone_number }))
        } else {
            console.log('fucking errors')
        }
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
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
        if(this.state.password == ''){
            error.password = "Empty field"
        } else {
            if(this.state.password.length < 5){
                error.password = "Too short"
            } else if (this.state.password > 20){
                error.password = "Too long"
            }
        }   


        this.setState({...this.state, error})
        return !error.username && !error.password
    }
    render(){
        const { isFetching, response, dispatch } = this.props
        const error = newErrorObj(this.props.error)
        if(isFetching){
            dispatch(showLoader())
        } else {
            dispatch(hideLoader())
        }
        if(response){
            console.log('response', response)
            //navigate
            //clear product data
            dispatch(clearUserForm())
            this.props.history.push('/users')
        }
        console.log('edit', this.props.isEdit)
        return (
            <div>
                UserForm
                <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px",  boxShadow: 'rgba(118, 143, 255, 0.1) 0px 16px 24px 0'}}>
                    <Field type="text" name="username" label="Username" onChange={this.onChange} error={(error && error.username) || this.state.error.username} />
                    <Field type="password" name="password" label="Password" onChange={this.onChange} error={(error && error.password) || this.state.error.password} />
                    <Field type="text" name="first_name" label="First Name" onChange={this.onChange}  />
                    <Field type="text" name="last_name" label="Last Name" onChange={this.onChange} />
                    <Field type="text" name="email" label="Email" onChange={this.onChange} error={(error && error.email) || this.state.error.email} />
                    <Field type="text" name="phone_number" label="Phone" onChange={this.onChange} />
                    <NumberSelect onChange={this.onUserTypeChanged} text="User Type:" value={this.state.user_type} items={[{name: 'Admin', value: 1}, {name: 'User', value: 2}]} />
                </form>
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_save} action={this.handleSubmit} />
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.users.form.error,
    isFetching: state.users.isFetching,
    response: state.users.form.response
})

export default withRouter(connect(mapStateToProps)(UserForm))