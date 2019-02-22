import React, { Component } from "react"

class StyleButton extends Component{

    onToggle = e => {
        e.preventDefault()
        this.props.onToggle(this.props.style)
    }

    render(){

        let className = "RichEditor-styleButton "
        if(this.props.active){
            className += "RichEditor-active "
        } else {
            className += "RichEditor-normal "
        }
        return (
            <span className={className} onMouseDown={this.onToggle}>
                {this.props.label}
            </span>
        )
    }
}

export default StyleButton