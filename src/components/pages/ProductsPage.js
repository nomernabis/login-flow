import React, { Component } from "react"
import TableContainer from "../../containers/TableContainer"
import { fetchProducts } from "../../actions"
import FloatingActionButton from "../ui/FloatingActionButton"
import { withRouter } from "react-router-dom"
import { ic_add } from "react-icons-kit/md"
import { Table } from "../ui/Table"
import { connect } from "react-redux"

class ProductsPage extends Component{
    render(){
        const { dispatch } = this.props
        return (
            <div style={{ padding: '32px'}}>
                <Table
                    loadData={() => dispatch(fetchProducts())}
                    displayedColumns = {['name', 'price', 'quantity']}
                    headerColumns = {['Name', 'Price', 'Quantity']}
                    items={this.props.products}
                />
                {/* <TableContainer dataName="products"
                    loadData={fetchProducts}
                    columns={['Name', 'Price', 'Quantity', 'Actions']}
                    showCols={['name', 'price', 'quantity']} /> */}
                
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