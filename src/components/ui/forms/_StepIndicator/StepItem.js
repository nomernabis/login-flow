import React, { Component } from "react"
import CircleIcon from "../../CirlceIcon"


class StepItem extends Component{
    render(){
        const { name, number, isActive } = this.props
        return (
            <div className="step-item">
                <div>
                    <div style={{ display: 'inline-block' }}>
                        <CircleIcon number={number} color={isActive ? '#1f6ff7': '#c4c4c4'} />
                    </div>
                    <div style={{ display: 'inline-block', marginLeft: '16px', color: isActive ? '#1f6ff7' : 'rgba(0, 0, 0, .8)' }}>
                        { name }
                    </div>
                </div>
            </div>
        )
    }
}

export default StepItem