import React, { Component } from "react"
import { MultiStepForm, Step } from "../../_MultiStepForm"
import { AddAttributeName, AddAttributeValues } from "./index"
import { attributesNextStep, attributesPrevStep } from "../../../actions"

class AttributeCreateForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <MultiStepForm prevStep={attributesPrevStep} nextStep={attributesNextStep} storePath="attributes" >
                <Step name="Attribute Name" component={AddAttributeName} />
                <Step name="Attribute Value" component={AddAttributeValues} />
            </MultiStepForm>
        )
    }
}

export default AttributeCreateForm