import React, { Component } from "react"
import { connect } from "react-redux"   
import { StepIndicator } from "../_StepIndicator"
import FloatingActionButton from "../../FloatingActionButton"
import { ic_save, ic_arrow_forward, ic_arrow_back } from "react-icons-kit/md"


class MultiStepForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { step, dispatch, prevStep, nextStep, storePath, stepsTotal, postData, validate } = this.props
        return (
            <div>
                <StepIndicator
                    errors = {this.props.children.map(child => child.props.error)}
                    onClick={this.props.onClick}
                    storePath={storePath}
                    steps={this.props.children.map(child => child.props.name)} 
                />
                <div style={{marginTop: "64px"}}>
                    {this.props.children.filter((child, index) => index == step)}
                </div>
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_arrow_back} action={() => dispatch(prevStep())} />

                    <FloatingActionButton icon={(stepsTotal - 1) == step ? ic_save : ic_arrow_forward } action={(stepsTotal - 1) == step ? postData: () =>{
                         if(validate(this.props)){
                             dispatch(nextStep())
                         }
                    }} />
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