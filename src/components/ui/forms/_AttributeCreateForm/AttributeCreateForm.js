import React, { Component } from "react"
import { MultiStepForm, Step } from "../../forms/_MultiStepForm"
import { AddAttributeName, AddAttributeValues } from "./index"
import { attributesNextStep, attributesPrevStep, fetchAttributeCreate } from "../../../../actions"
import { connect } from "react-redux"

class AttributeCreateForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { name, displayed_name, values, dispatch } = this.props
        return (
            <MultiStepForm stepsTotal={2} postData={() => {
                dispatch(fetchAttributeCreate({ name, displayed_name, values }))
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
    values: state.attributes.form.values
})

export default connect(mapStateToProps)(AttributeCreateForm)