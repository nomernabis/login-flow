import React, { Component } from "react"
import StepIndicator from "../StepIndicator"
import { Field } from "../Field"
import TextEditor from "../TextEditor"

import { isNumber } from "../../utils"

import { FloatingActionButton } from "../FloatingActionButton"

import { prevStep, nextStep } from "../../actions"
import { connect } from "react-redux"
import CategoriesStep from "../form/CategoriesStep"
import AttributesStep from "../form/AttributesStep"

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
        let content
        console.log('step',this.props.step)
        switch(this.props.step){
            case 0:
                content = (
                    <div style={{marginTop: "64px"}}>
                        <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px"}}>
                            <Field type="text" name="name" label="Name" />
                            <Field type="text" name="quantity" label="Quantity" onChange={this.onChangeNumber} value={this.state.quantity} />
                        </form>
                        <TextEditor />
                    </div>
                )
                break
            case 1:
                content = (
                    <div style={{marginTop: "64px"}}>
                        <CategoriesStep />
                    </div>
                )
                break
            case 2:
                content = (
                    <div style={{marginTop: "64px"}}>
                        <AttributesStep />
                    </div>
                )
                break
            case 3:
                content = (
                    <div>
                        Step 4
                    </div>
                )
                break
            case 4:
                content = (
                    <div>
                        Step 5
                    </div>
                )
                break
            default:
                break
        }
        return (
            <div className="page-container">
                Product Create Page
                <StepIndicator steps={['Product Info', 'Categories', 'Attributes', 'Images', 'Review']} />
                    {content}
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton value="L" action={() => this.props.dispatch(prevStep())} />
                    <FloatingActionButton value="R" action={() => this.props.dispatch(nextStep())} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step: state.products.form.step
})

export default connect(mapStateToProps)(ProductCreatePage)