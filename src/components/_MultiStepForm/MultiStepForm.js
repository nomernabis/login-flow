import React, { Component } from "react"
import { connect } from "react-redux"
import StepIndicator from "../StepIndicator"
import { FloatingActionButton } from "../FloatingActionButton"

class MultiStepForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { step, dispatch, prevStep, nextStep, storePath } = this.props
        return (
            <div>
                <StepIndicator storePath={storePath} steps={this.props.children.map(child => child.props.name)} />
                <div style={{marginTop: "64px"}}>
                    {this.props.children.filter((child, index) => index == step)}
                </div>
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton value="L" action={() => dispatch(prevStep())} />
                    <FloatingActionButton value="R" action={() => dispatch(nextStep())} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    step: state[ownProps.storePath].form.step
})

export default connect(mapStateToProps)(MultiStepForm)