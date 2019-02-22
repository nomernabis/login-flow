import React, { Component } from "react"
import Field from "../Field"
import { TextEditor } from "../../TextEditor"
import { connect } from "react-redux"
import { addProductNameChanged, addProductQuantityChanged, addProductDescriptionChanged } from "../../../../actions"
import { isNumber } from "../../../../utils"

class ProductInfoStep extends Component{
    constructor(props){
        super(props)
        this.onNameChanged = this.onNameChanged.bind(this)
        this.onQuantityChanged = this.onQuantityChanged.bind(this)
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this)
    }
    onNameChanged(e){
        this.props.dispatch(addProductNameChanged(e.target.value))
    }
    onQuantityChanged(e){
        const { value } = e.target
        console.log('value', value, isNumber(value))
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
                <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px"}}>
                    <Field type="text" name="name" label="Name" onChange={this.onNameChanged} value={this.props.name} error={ error && error.name} />
                    <Field type="text" name="quantity" label="Quantity" onChange={this.onQuantityChanged} value={this.props.quantity} />
                </form>
                <TextEditor description={this.props.description} onChange={this.onDescriptionChanged} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.products.form.name,
    quantity: state.products.form.quantity,
    description: state.products.form.description,
    error: state.products.form.error
})
export default connect(mapStateToProps)(ProductInfoStep)