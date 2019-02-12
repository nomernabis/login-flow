import React, { Component } from "react"
import { connect } from "react-redux"

import { Table } from "../components/ui/_Table"

import { addProductToggleCategory } from "../actions"

class TableContainer extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const { dispatch, loadData } = this.props
        if(loadData){
            dispatch(loadData())
        }
    }
    render(){
        const { dispatch } = this.props
        return (
            <Table {...this.props} onCategorySelected = {(category) => dispatch(addProductToggleCategory(category))} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: ownProps.mapStateToProps ? ownProps.mapStateToProps(state) : state[ownProps.dataName].items,
    selected: ownProps.selectable ? state[ownProps.selectedDataStore].form.selected[ownProps.dataName] : []
})

export default connect(mapStateToProps)(TableContainer)