import React, { Component } from "react"
import Field from "../Field"
import { TextEditor } from "../../TextEditor"
import { addProductNameChanged, addProductQuantityChanged, addProductDescriptionChanged } from "../../../../actions"
import { isNumber } from "../../../../utils"

class ProductInfoStep extends Component{
    onNameChanged(e){
        this.props.dispatch(addProductNameChanged(e.target.value))
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
        const { error } = this.props
        return (
            <div>
                <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px",  boxShadow: 'rgba(118, 143, 255, 0.1) 0px 16px 24px 0'}}>
                    <Field type="text" name="name" label="Name" onChange={this.props.onNameChanged} value={this.props.productName} error={ error } />
                    <Field type="text" name="quantity" label="Quantity" onChange={this.props.onQuantityChanged} value={this.props.quantity} />
                </form>
                <TextEditor onChange={this.props.onDescriptionChanged} description={this.props.description} />
            </div>
        )
    }
}

export default ProductInfoStep