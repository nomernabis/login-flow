import React, { Component } from "react"
import { connect } from "react-redux"

import Table from "../components/table/Table"

import { addProductToggleCategory } from "../actions"

class TableContainer extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const { dispatch, loadData } = this.props
        dispatch(loadData())
    }
    render(){
        const { dispatch } = this.props
        return (
            <Table {...this.props} onCategorySelected = {(category) => dispatch(addProductToggleCategory(category))} />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('shit', state[ownProps.dataName])
    return {
        items: state[ownProps.dataName].items,
        selected: ownProps.selectable ? state[ownProps.selectedData].form.selectedCategories : [] 
    }
}


export default connect(mapStateToProps)(TableContainer)