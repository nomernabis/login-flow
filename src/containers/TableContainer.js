import React, { Component } from "react"
import { connect } from "react-redux"

import Table from "../components/table/Table"

class TableContainer extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const { dispatch, loadData } = this.props
        dispatch(loadData())
    }
    render(){
        return (
            <Table {...this.props} />
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: state[ownProps.dataName].items
})

export default connect(mapStateToProps)(TableContainer)