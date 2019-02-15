import React, { Component } from "react"
import { connect } from "react-redux"
import { StepIndicator } from "../_StepIndicator"
import FloatingActionButton from "../../FloatingActionButton"

class MultiStepForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { step, dispatch, prevStep, nextStep, storePath, stepsTotal, postData } = this.props
        console.log("Multisteps", step)
        return (
            <div>
                <StepIndicator storePath={storePath} steps={this.props.children.map(child => child.props.name)} />
                <div style={{marginTop: "64px"}}>
                    {this.props.children.filter((child, index) => index == step)}
                </div>
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton value="L" action={() => dispatch(prevStep())} />
                    <FloatingActionButton value="R" action={(stepsTotal - 1) == step ? postData: () => dispatch(nextStep())} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('dadasdasd', ownProps.storePath, state[ownProps.storePath])
    return {
        step: state[ownProps.storePath].form.step
    }
}

export default connect(mapStateToProps)(MultiStepForm)