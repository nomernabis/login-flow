import React, { Component } from "react"
import {StepItem} from "./StepItem"

import "../styles/StepIndicator.css"

class StepIndicator extends Component{
    render(){
        const content = this.props.steps.map((step, index) => <StepItem name={step} number={index+1} isActive={index == 0} />)
        return (
            <div className="step-indicator">
                {content}
            </div>
        )
    }
}

export default StepIndicator