import React, { Component } from "react"
import { Field } from "../../Field"

class AddAttributeName extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{ padding: '32px', backgroundColor: 'white' }}>
                <form>
                    <Field type="text" name="name" label="Name" value="" />
                    <Field type="text" name="displayed_name" label="Displayed Name" value="" />
                </form>
            </div>
        )
    }
}

export default AddAttributeName