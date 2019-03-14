import React, { Component } from "react"
import { connect } from "react-redux"

import { hideModal, fetchCategories } from "../../actions"
import { Api } from "../../utils"

import "../../styles/Modal.css"
import Field from "./forms/Field";

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
        this.update = this.update.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.name){
            this.setState({ name: nextProps.name })
        }
    }
    deleteItem(){
        const { data } = this.props
        this.setState({ isFetching: true })
        Api.delete('categories/' + data.id + '/').then(response => {
            this.setState({ isFetching: false })
            dispatch(hideModal())
            dispatch(fetchCategories())
        }).catch(error => {
            this.setState({ isFetching: false, error })
        })
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
    update(name){
        const { dispatch } = this.props
        this.setState({ isFetching: true })
        Api.patch('categories/' + this.props.data.id + '/', { name })
            .then(response => {
                this.setState({ isFetching: false })
                dispatch(hideModal())
                dispatch(fetchCategories())
            }).catch(error => {
                this.setState({ isFetching: false, error })
            })
    }
    onCreateClicked(){
        const { name } = this.state
        const { dispatch } = this.props

        if(this.validate()){
            this.props.onClick(name)
            // if(this.props.name){
            //     this.update(name)
            // } else {
            //     this.setState({ isFetching: true })
            //     Api.post('categories/', { name })
            //     .then(response => {
            //         this.setState({ isFetching: false })
            //         dispatch(hideModal())
            //         dispatch(fetchCategories())
            //     })
            //     .catch(error => {
            //         this.setState({ isFetching: false, error })
            //     })
            // }
        }
    }
    onChange(e){
        this.setState({name: e.target.value, error: {}})
    }
    render(){
        const { show, dispatch, modal_type } = this.props
        let content
        if(modal_type == 'INFO_MODAL'){
            content = (
                <div className="modal-content">
                    <div>Do u want to delete category</div>
                    <div>{this.props.data.name}</div>
                    <div>
                        <button onClick={this.deleteItem}>Yes</button>
                        <button onClick={() => dispatch(hideModal())}>No</button>
                    </div>
                </div>
            )
        } else {
            content = (
                <div className="modal-content">
                    <div>Modal Text</div>
                    {this.state.error.global && (<span>{this.state.error.global}</span>)}
                    <div>
                        <Field type="text" name="name" value={this.state.name} onChange={this.onChange} error = {this.state.error.name} />
                        <button disabled={this.state.isFetching} value={this.state.name} onClick={this.onCreateClicked}>Create</button>
                        <button onClick={() => {
                            dispatch(hideModal())
                            this.setState({ name: '', error: {}})
                        }}>Cancel</button>
                    </div>
                </div>
            )
        }
        return (
            <div style={{ display: show ? "flex" : "none"}} className="modal-container">
               {content}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    show: state.modal.show,
    name: state.modal.data ? state.modal.data.name : undefined,
    data: state.modal.data,
    modal_type: state.modal.modal_type,
    onClick: state.modal.onClick
})

export default connect(mapStateToProps)(Modal)