import React, { Component } from "react"
import TableContainer from "../../containers/TableContainer"
import { fetchProducts } from "../../actions"
import FloatingActionButton from "../ui/FloatingActionButton"
import { withRouter } from "react-router-dom"

class ProductsPage extends Component{
    render(){
        return (
            <div>
                <TableContainer dataName="products"
                    loadData={fetchProducts}
                    columns={['Name', 'Price', 'Quantity', 'Actions']}
                    showCols={['name', 'price', 'quantity']} />
                
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton action={() => this.props.history.push('/products/add')} />
                </div>  
            </div>
        )
    }
}

export default withRouter(ProductsPage)