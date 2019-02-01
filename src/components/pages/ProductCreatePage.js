import React, { Component } from "react"
import StepIndicator from "../StepIndicator"
import { Field } from "../Field"
import TextEditor from "../TextEditor"

import { isNumber } from "../../utils"

class ProductCreatePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            quantity: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeNumber = this.onChangeNumber.bind(this)
    }

    onChange(e){

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
                <StepIndicator steps={['Product Info', 'Categories', 'Attributes', 'Images', 'Review']} />
                <div style={{marginTop: "64px"}}>
                    <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px"}}>
                        <Field type="text" name="name" label="Name" />
                        <Field type="text" name="quantity" label="Quantity" onChange={this.onChangeNumber} value={this.state.quantity} />
                        <TextEditor />
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductCreatePage