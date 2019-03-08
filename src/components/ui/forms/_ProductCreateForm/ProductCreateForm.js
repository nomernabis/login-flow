import React, { Component } from "react"

import { prevStep, nextStep, addProductSetError, fetchAddProduct,
    addProductNameChanged, addProductQuantityChanged, addProductDescriptionChanged, addProductToggleCategory,
    addProductToStep, addProductClearError, showLoader, hideLoader } from "../../../../actions"
import { connect } from "react-redux"
import { MultiStepForm, Step } from "../_MultiStepForm"
import { ProductInfoStep, CategoriesStep, AttributesStep, ImageUploadStep } from "."
import fetch from "cross-fetch"

import { isNumber } from "../../../../utils"
import { fetchCategories } from '../../../../actions'
import { checkErrorObj, formatServerError } from "../../../../utils"

import { withRouter } from "react-router-dom"

class ProductCreateForm extends Component{
    constructor(props){
        super(props)
        this.validate = this.validate.bind(this)
        this.onNameChanged = this.onNameChanged.bind(this)
        this.onQuantityChanged = this.onQuantityChanged.bind(this)
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
    }
    validate(data){
        const { step, name, selectedCategories } = data
        let errors = {}
        switch(step){
            case 0: 
                if(name == ''){
                    errors.name = 'The field cannot be empty.'
                } else if( name.length > 15){
                    errors.name = "The field is too long."
                } else if( name.length < 3){
                    errors.name = 'The field is too short.'
                }
                this.props.dispatch(addProductSetError(errors))
                return !errors.name
            case 1:
                if(Object.keys(selectedCategories).length == 0){
                    errors.categories = "You must at least choose one category."
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
    onNameChanged(e){
        this.props.dispatch(addProductNameChanged(e.target.value))
        if(this.props.error.name){
            this.props.dispatch(addProductClearError('name'))
        }
    }
    onQuantityChanged(e){
        const { value } = e.target
        if(isNumber(value)){
            this.props.dispatch(addProductQuantityChanged(e.target.value)) 
        }
    } 
    onDescriptionChanged(value){
        this.props.dispatch(addProductDescriptionChanged(value))
    }
    render(){
        const { images, categories, attributes, name, description, quantity, dispatch, selectedCategories, error, isFetching, response} = this.props
        const errorType = checkErrorObj(error)
        let newError = error
        if(errorType == 'server'){
            newError = formatServerError(error)
        }
        if(isFetching){
            dispatch(showLoader())
        } else {
            dispatch(hideLoader())
        }
        if(response){
            console.log('response', response)
            //navigate
            //clear product data
            this.props.history.push('/products')
        }
        return (
            <div className="page-container">
                <MultiStepForm onClick={step => dispatch(addProductToStep(step))} validate={() => this.validate(this.props)} storePath="products" stepsTotal={4} 
                
                    postData={() => {
                    
                    fetch(images[0])
                        .then(res => res.blob())
                        .then(blob => {
                            var formData = new FormData()
                            let cats = Object.keys(selectedCategories).map(id => Number(id))

                            console.log('cats new', cats)

                            formData.append('image', blob)
                            formData.append('categories', cats)
                            formData.append('attributes', attributes)
                            formData.append('name', name)
                            formData.append('description', description)
                            formData.append('quantity', quantity)
                            formData.append('price', 100)
                            
                            dispatch(fetchAddProduct(formData))
                        })

                }}

                prevStep={prevStep} nextStep={nextStep}>
                    <Step   name="Product Info" 
                            onNameChanged={this.onNameChanged}
                            onQuantityChanged={this.onQuantityChanged}
                            onDescriptionChanged={this.onDescriptionChanged}
                            productName={name}
                            quantity={quantity} 
                            description={description}
                            component={ProductInfoStep}
                            error={newError && newError.name}
                            clearError={ errorName => dispatch(addProductClearError(errorName))}
                    />
                    <Step name="Categories"
                        error={newError && newError.categories}
                        loadData={() => this.props.dispatch(fetchCategories())} 
                        categories={categories.map(category => {
                            if(selectedCategories[category.id]){
                                category.isActive = true
                            } else {
                                category.isActive = false
                            }
                            return category
                        } )}
                        component={CategoriesStep}
                        clearError={ errorName => dispatch(addProductClearError(errorName))}
                        onClick={category => {
                            dispatch(addProductToggleCategory(category))
                            if(newError && newError.categories){
                                dispatch(addProductClearError('categories'))
                            }
                        }} />
                    <Step name="Attributes" component={AttributesStep} />
                    <Step name="Images" component={ImageUploadStep} />
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
    selectedCategories: state.products.form.selected.categories,
    categories: state.categories.items,
    attributes: state.products.form.selected.attributes,
    images: state.products.form.selected.images,
    error: state.products.form.error,
    isFetching: state.products.form.isFetching,
    response: state.products.form.response
})

export default withRouter(connect(mapStateToProps)(ProductCreateForm))