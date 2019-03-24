import React, { Component } from "react"
import FloatingActionButton from "../ui/FloatingActionButton"

import { connect } from "react-redux"
import { fetchCategories, showModal } from "../../actions"
import { ic_add } from "react-icons-kit/md"

import { Table } from "../ui/Table"
import ActionsTableItem from "../ui/Table/ActionsTableItem"

class CategoriesPage extends Component{
    render(){
        const { dispatch } = this.props
        return (
            <div style={{padding: "32px", height: "100%", boxSizing: "border-box"}}>
                <Table
                    tableItem={ActionsTableItem}
                    loadData={(limit, offset) => dispatch(fetchCategories(limit, offset))}
                    items={this.props.categories.results}
                    data={this.props.categories}
                    headerColumns={['Name', 'Actions']}
                    displayedColumns={['name']}
                    pagination={true}
                />
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_add} action={() => dispatch(showModal('ADD_CATEGORIES'))} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.response || []
})

export default connect(mapStateToProps, null)(CategoriesPage)