import React, { Component } from "react"
import { connect } from "react-redux"

import { hideModal, fetchCategories } from "../actions"
import { Api } from "../utils"

import "../styles/Modal.css"
import { Field } from "./Field";

class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFetching: false,
            name: '',
            error: {
                global: '',
                name: ''
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onCreateClicked = this.onCreateClicked.bind(this)
        this.validate = this.validate.bind(this)
    }
    validate(){
        const { name } = this.state
        let error = {}
        if(name === ''){
            error.name = 'This field cannot be empty'
        } else {
            if(name.length > 100){
                error.name = 'Too long'
            }
        }
        this.setState({ error })
        return !error.name
    }
    onCreateClicked(){
        const { name } = this.state
        const { dispatch } = this.props

        if(this.validate()){
            this.setState({ isFetching: true })
            Api.post('categories/', { name })
            .then(response => {
                this.setState({ isFetching: false })
                dispatch(hideModal())
                dispatch(fetchCategories())
            })
            .catch(error => {
                this.setState({ isFetching: false, error })
            })
        }
    }
    onChange(e){
        this.setState({name: e.target.value, error: {}})
    }
    render(){
        const { show, dispatch } = this.props
        return (
            <div style={{ display: show ? "flex" : "none"}} className="modal-container">
                <div className="modal-content">
                    <div>Modal Text</div>
                    {this.state.error.global && (<span>{this.state.error.global}</span>)}
                    <div>
                        <Field type="text" name="name" value={this.state.name} onChange={this.onChange } error = {this.state.error.name} />
                        <button disabled={this.state.isFetching} value={this.state.name} onClick={this.onCreateClicked}>Create</button>
                        <button onClick={() => {
                            dispatch(hideModal())
                            this.setState({ name: '', error: {}})
                        }}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    show: state.modal.show
})

export default connect(mapStateToProps)(Modal)