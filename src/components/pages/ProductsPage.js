import React, { Component } from "react"
import Table from "../table/Table"
import { FloatingActionButton } from "../FloatingActionButton"

import { connect } from "react-redux"
import { fetchCategories } from "../../actions"
import { showModal } from "../../actions"

class ProductsPage extends Component{

    componentDidMount(){
        this.props.dispatch(fetchCategories())
    }
    
    render(){
        const { dispatch } = this.props
        return (
            <div style={{padding: "32px", height: "100%", boxSizing: "border-box"}}>
                <Table items={this.props.categories} />
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

export default connect(mapStateToProps, null)(ProductsPage)