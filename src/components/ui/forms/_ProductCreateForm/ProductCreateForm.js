import React, { Component } from "react"

import { prevStep, nextStep } from "../../../../actions"
import { connect } from "react-redux"
import { MultiStepForm, Step } from "../_MultiStepForm"
import { ProductInfoStep, CategoriesStep, AttributesStep } from "."


class ProductCreateForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="page-container">
                <MultiStepForm storePath="products" stepsTotal={5} postData={() => {
                    console.log('data posted')
                }} prevStep={prevStep} nextStep={nextStep}>
                    <Step name="Product Info" component={ProductInfoStep} />
                    <Step name="Categories" component={CategoriesStep} />
                    <Step name="Attributes" component={AttributesStep} />
                    <Step name="Images" component={() => <div>Images</div>} />
                    <Step name="Review" component={() => <div>Review</div>} />
                </MultiStepForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.products.form.step
})

export default connect(mapStateToProps)(ProductCreateForm)