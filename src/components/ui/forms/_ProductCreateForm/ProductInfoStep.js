import React, { Component } from "react"
import Field from "../Field"
import { TextEditor } from "../../_TextEditor"
import { connect } from "react-redux"

import { addProductNameChanged, addProductQuantityChanged, addProductDescriptionChanged } from "../../../../actions"

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
        this.props.dispatch(addProductQuantityChanged(e.target.value))
    }
    onDescriptionChanged(e){
        this.props.dispatch(addProductDescriptionChanged(e.target.value))
    }
    render(){
        return (
            <div>
                <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px"}}>
                    <Field type="text" name="name" label="Name" onChange={this.onNameChanged} />
                    <Field type="text" name="quantity" label="Quantity" onChange={this.onQuantityChanged} />
                </form>
                <TextEditor onChange={this.onDescriptionChanged} />
            </div>
        )
    }
}

export default connect()(ProductInfoStep)