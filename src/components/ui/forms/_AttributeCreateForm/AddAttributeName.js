import React, { Component } from "react"
import Field from "../Field"

import { connect } from "react-redux"
import {attributesFormSetName, attributesFormSetDisplayedName} from "../../../../actions"

class AddAttributeName extends Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        switch(e.target.name){
            case 'name':
                this.props.setName(e.target.value)
                break
            case 'displayed_name':
                this.props.setDisplayedName(e.target.value)
                break
            default:
                break
        }

    }
    render(){
        const { setName, setDisplayedName, name, displayed_name } = this.props
        return (
            <div style={{ padding: '32px', backgroundColor: 'white' }}>
                <form>
                    <Field type="text" name="name" label="Name" value={name} onChange={this.onChange} />
                    <Field type="text" name="displayed_name" label="Displayed Name" value={displayed_name} onChange={this.onChange} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.attributes.form.name,
    displayed_name: state.attributes.form.displayed_name
})

const mapDispatchToProps = dispatch => ({
    setName: name => dispatch(attributesFormSetName(name)),
    setDisplayedName: displayed_name => dispatch(attributesFormSetDisplayedName(displayed_name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAttributeName)