import React, { Component } from "react"
import { AttributeCreateForm } from "../form/_AttributeCreateForm"


class AttributeCreatePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{ padding: '32px'}}>
                <AttributeCreateForm />
            </div>
        )
    }
}

export default AttributeCreatePage