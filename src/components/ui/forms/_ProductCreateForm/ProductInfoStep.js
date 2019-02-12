import React, { Component } from "react"

class ProductInfoStep extends Component{
    render(){
        return (
            <div>
                <form style={{backgroundColor: 'white',  paddingTop: "32px", paddingBottom: "32px", paddingLeft: "32px"}}>
                    <Field type="text" name="name" label="Name" />
                    <Field type="text" name="quantity" label="Quantity" onChange={this.onChangeNumber} value={this.state.quantity} />
                </form>
                <TextEditor />
            </div>
        )
    }
}

export default ProductInfoStep