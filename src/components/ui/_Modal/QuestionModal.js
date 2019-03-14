import React, { Component } from "react"

import "../../../styles/Modal.css"

class QuestionModal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="modal-content">
                <div>{this.props.text}</div>
                <button onClick={this.props.onYes}>Yes</button>
                <button onClick={this.props.onNo}>No</button>
            </div>
        )
    }
}

export default QuestionModal