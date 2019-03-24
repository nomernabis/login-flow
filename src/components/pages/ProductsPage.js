import React, { Component } from "react"
import { fetchProducts } from "../../actions"
import FloatingActionButton from "../ui/FloatingActionButton"
import { withRouter } from "react-router-dom"
import { ic_add } from "react-icons-kit/md"
import { Table } from "../ui/Table"
import { connect } from "react-redux"
import ActionsTableItem from "../ui/Table/ActionsTableItem"

class ProductsPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { dispatch } = this.props
        return (
            <div style={{ padding: '32px'}}>
                <Table
                    loadData={(limit, offset) => dispatch(fetchProducts(limit, offset))}
                    displayedColumns = {['name', 'price', 'quantity']}
                    headerColumns = {['Name', 'Price', 'Quantity', 'Actions']}
                    items={this.props.products.results}
                    data={this.props.products}
                    tableItem={ActionsTableItem}
                    pagination={true}
                />
                
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_add} action={() => this.props.history.push('/products/add')} />
                </div>  
            </div>
        )
    }
}   

const mapStateToProps = state => ({
    products: state.products.items
})

export default withRouter(connect(mapStateToProps)(ProductsPage))