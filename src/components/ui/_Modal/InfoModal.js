import React, { Component } from "react"

import "../../../styles/Modal.css"
class InfoModal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{ position: 'relative'}} className="modal-content">
                <div>{this.props.text}</div>
                <a onClick={this.props.hideModal} className="text-button" style={{position: 'absolute', bottom: '8px'}}>OK</a>
            </div>
        )
    }
}

export default InfoModal