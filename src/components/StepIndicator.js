import React, { Component } from "react"

import {StepItem} from "./StepItem"
import CircleIcon from "./CirlceIcon"

import "../styles/StepIndicator.css"

class StepIndicator extends Component{
    render(){
        const content = this.props.steps.map((step, index) => <StepItem name={step} number={index+1} />)
        return (
            <div className="step-indicator">
                {content}
            </div>
        )
    }
}

export default StepIndicator