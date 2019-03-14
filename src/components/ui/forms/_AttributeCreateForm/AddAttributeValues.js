import React, { Component } from "react"

import { connect } from "react-redux"
import { showModal, attributesAddValue, hideModal } from "../../../../actions"

import { TableContainer } from "../../../../containers"

class AddAttributeValues extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { showModal } = this.props
        return (
            <div>
                <button onClick={showModal}>Add Value</button>
                <TableContainer mapStateToProps={ state => state.attributes.form.values } columns={['name']} showCols={['name']} dataName="attributes" />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    showModal: () => dispatch(showModal('ADD_VALUE_MODAL', 'Fuck You!', () => console.log('yes'), () => dispatch(hideModal())))
})

export default connect(null, mapDispatchToProps)(AddAttributeValues)