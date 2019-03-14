import React, { Component } from "react"

import InfoModal from "./InfoModal"
import QuestionModal from "./QuestionModal"
import AttributeFormModal from "./AttributeFormModal"

import { connect } from "react-redux"
import { hideModal } from "../../../actions"

import "../../../styles/Modal.css"
class Modal extends Component{
    constructor(props){
        super(props)
    }

    render(){

        let content
        switch (this.props.modalType) {
            case 'INFO_MODAL':
                content = (
                    <InfoModal hideModal={() => this.props.dispatch(hideModal())} text={this.props.text} />
                )
                break;
            case 'QUESTION_MODAL':
                content = (
                    <QuestionModal text={this.props.text} onYes={this.props.onYes} onNo={this.props.onNo} />
                )
                break
            case 'ADD_VALUE_MODAL':
                content = (
                    <AttributeFormModal  />
                )   
                break
            default:
                break;
        }
        return (
            <div style={{ display: this.props.show ? "flex" : "none"}} className="modal-container">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    modalType: state.modal.modalType,
    text: state.modal.text,
    show: state.modal.show,
    onYes: state.modal.onYes,
    onNo: state.modal.onNo
})

export default connect(mapStateToProps)(Modal)