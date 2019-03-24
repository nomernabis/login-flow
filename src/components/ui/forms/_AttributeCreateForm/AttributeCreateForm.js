import React, { Component } from "react"
import { MultiStepForm, Step } from "../_MultiStepForm"
import { AddAttributeName, AddAttributeValues } from "./index"
import { attributesNextStep, attributesPrevStep, fetchAttributeCreate } from "../../../../actions"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

class AttributeCreateForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { name, displayed_name, values, dispatch, step } = this.props
        return (
            <MultiStepForm validate={() => {
                switch(step){
                    case 0:
                        return true
                    case 1:
                        return true
                    default:
                        return true
                }
            }} stepsTotal={2} postData={() => {
                dispatch(fetchAttributeCreate({ name, displayed_name, values }))
                this.props.history.push('/attributes')
            }} prevStep={attributesPrevStep} nextStep={attributesNextStep} storePath="attributes" >
                <Step name="Attribute Name" component={AddAttributeName} />
                <Step name="Attribute Value" component={AddAttributeValues} />
            </MultiStepForm>
        )
    }
}

const mapStateToProps = state => ({
    name: state.attributes.form.name,
    displayed_name: state.attributes.form.displayed_name,
    values: state.attributes.form.values,
    step: state.attributes.form.step
})

export default withRouter(connect(mapStateToProps)(AttributeCreateForm))