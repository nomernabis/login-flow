import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class ProductsPage extends Component{
    render(){
        return (
            <div>
                Products
            </div>
        )
    }
}

export default withRouter(ProductsPage)