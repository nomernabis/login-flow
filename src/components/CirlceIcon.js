import React, { Component } from "react"

class CircleIcon extends Component{
    render(){
        return (
            <div className="perfect-center" style={{ borderRadius: '50%', width: '30px', height: '30px', backgroundColor: this.props.color, color: 'white'}}>
                {this.props.number}
            </div>
        )
    }
}

export default CircleIcon