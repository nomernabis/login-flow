import React, { Component } from "react"

import { connect } from "react-redux"

import Field from "../forms/Field"

import { hideModal } from "../../../actions"

import "../../../styles/Modal.css"
import { Api } from "../../../utils";
class CategoryFormModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            error: {}
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.setState({ name: e.target.value })
    }
    render(){
        const { dispatch } = this.props
        return (
            <div className="modal-content">
                <div>Category Name</div>
                <Field type="text" name="name" value={this.state.name} onChange={this.onChange} error = {this.state.error.name} />
                <div>
                    <a style={{ marginRight: '16px'}} className="text-button" onClick={() => {
                        Api.post('categories/', {name: this.state.name})
                        .then(response => {
                            this.setState({ name: '', error: {}})
                            dispatch(hideModal())
                        }).catch(error => dispatch(hideModal()))
                    }}>Create</a>
                    <a className="text-button" onClick={() => {
                        dispatch(hideModal())
                        this.setState({ name: '', error: {}})
                    }}>Cancel</a>
                </div>
            </div>
        )
    }
}

export default connect()(CategoryFormModal)