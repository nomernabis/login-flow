import React, { Component } from "react"
import StepItem from "./StepItem"
import { connect } from "react-redux"


class StepIndicator extends Component{
    render(){
        const { errors } = this.props
        const content = this.props.steps.map((step, index) => 
            <StepItem 
                isCompleted={index < this.props.lastStep} 
                onClick={this.props.onClick} 
                name={step} 
                number={index+1} 
                isActive={index == this.props.step}
                error={errors[index]}
            />)
        return (
            <div className="step-indicator">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    step: state[ownProps.storePath].form.step,
    lastStep: state[ownProps.storePath].form.lastStep 
})
export default connect(mapStateToProps)(StepIndicator)