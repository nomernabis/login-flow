import React, { Component } from "react"

import ProductsPage from "./pages/ProductsPage"

class Content extends Component{
    render(){
        return(
            <div style={{ width: "100%"}}>
                <ProductsPage />
            </div>
        )
    }
}

export default Content