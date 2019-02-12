import React, { Component } from "react"

import { isNumber } from "../../../../utils"
import { prevStep, nextStep } from "../../../../actions"
import { connect } from "react-redux"
import { ProductInfoStep, CategoriesStep, AttributesStep } from "."


class ProductCreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            quantity: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeNumber = this.onChangeNumber.bind(this)
    }

    onChangeNumber(e){
        if(isNumber(e.target.value)){
            this.setState({ quantity: e.target.value })
        }
    }

    render(){
        return (
            <div className="page-container">
                Product Create Page
                <MultiStepForm stepsTotal={5} postData={() => {
                    console.log('data posted')
                }} prevStep={prevStep} nextStep={nextStep} storePath="attributes" >
                    <Step name="Product Info" component={ProductInfoStep} />
                    <Step name="Categories" component={CategoriesStep} />
                    <Step name="Attributes" component={AttributesStep} />
                    <Step name="Images" component={() => <div>Images</div>} />
                    <Step name="Attribute Value" component={() => <div>Review</div>} />
                </MultiStepForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.products.form.step
})

export default connect(mapStateToProps)(ProductCreatePage)