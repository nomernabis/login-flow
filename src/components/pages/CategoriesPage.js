import React, { Component } from "react"
import TableContainer from "../../containers/TableContainer"
import { FloatingActionButton } from "../FloatingActionButton"

import { connect } from "react-redux"
import { fetchCategories } from "../../actions"
import { showModal } from "../../actions"

class CategoriesPage extends Component{
    render(){
        const { dispatch } = this.props
        return (
            <div style={{padding: "32px", height: "100%", boxSizing: "border-box"}}>
                <TableContainer showCols={['id', 'name']} dataName="categories" loadData={fetchCategories} columns={["Id", "Name", "Actions"]} />
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton action={() => dispatch(showModal())} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.items ? state.categories.items : []
})

export default connect(mapStateToProps, null)(CategoriesPage)