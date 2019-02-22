import React, { Component } from "react"

import { prevStep, nextStep, addProductSetError, fetchAddProduct } from "../../../../actions"
import { connect } from "react-redux"
import { MultiStepForm, Step } from "../_MultiStepForm"
import { ProductInfoStep, CategoriesStep, AttributesStep, ImageUploadStep } from "."
import fetch from "cross-fetch"

class ProductCreateForm extends Component{
    constructor(props){
        super(props)
        this.validate = this.validate.bind(this)
    }
    validate(data){
        const { step, name, quantity, categories} = data
        let errors = {}
        switch(step){
            case 0: 
                if(name == ''){
                    errors.name = 'The field cannot be empty'
                } else if( name.length > 15){
                    errors.name = "The field is too long."
                } else if( name.length < 3){
                    errors.name = 'The field is too short.'
                }
                this.props.dispatch(addProductSetError(errors))
                return !errors.name
            case 1:
                if(Object.keys(categories).length == 0){
                    errors.categories = "You must at least choose one category"
                }
                this.props.dispatch(addProductSetError(errors))
                return !errors.categories
            case 2:
                return true
            case 3:
                return true
            case 4:
                return true
            default:
                break
        }
    }
    render(){
        const { images, categories, attributes, name, description, quantity, dispatch } = this.props
        return (
            <div className="page-container">
                <MultiStepForm validate={() => this.validate(this.props)} storePath="products" stepsTotal={5} postData={() => {
                    console.log('data posted')
                    
                    fetch(images[0])
                        .then(res => res.blob())
                        .then(blob => {
                            
                            console.log('add product')
                            
                            var formData = new FormData()
                            formData.append('image', blob)
                            formData.append('categories', Object.keys(categories))
                            formData.append('attributes', attributes)
                            formData.append('name', name)
                            formData.append('description', description)
                            formData.append('quantity', quantity)
                            formData.append('price', 100)
                    
                            dispatch(fetchAddProduct(formData))
                        })

                }} prevStep={prevStep} nextStep={nextStep}>
                    <Step name="Product Info" component={ProductInfoStep} />
                    <Step name="Categories" component={CategoriesStep} />
                    <Step name="Attributes" component={AttributesStep} />
                    <Step name="Images" component={ImageUploadStep} />
                    <Step name="Review" component={() => <div>Review</div>} />
                </MultiStepForm>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    step: state.products.form.step,
    name: state.products.form.name,
    quantity: state.products.form.quantity,
    description: state.products.form.description,
    categories: state.products.form.selected.categories,
    attributes: state.products.form.selected.attributes,
    images: state.products.form.selected.images
})

export default connect(mapStateToProps)(ProductCreateForm)