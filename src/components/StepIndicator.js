import React, { Component } from "react"
import { StepItem } from "./StepItem"
import { connect } from "react-redux"

import "../styles/StepIndicator.css"

class StepIndicator extends Component{
    render(){
        const content = this.props.steps.map((step, index) => <StepItem name={step} number={index+1} isActive={index == this.props.step} />)
        return (
            <div className="step-indicator">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.products.form.step 
})
export default connect(mapStateToProps)(StepIndicator)