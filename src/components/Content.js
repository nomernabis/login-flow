import React, { Component } from "react"

import CategoriesPage from "./pages/CategoriesPage"
import ProductsPage from "./pages/ProductsPage"
import ProductCreatePage from "./pages/ProductCreatePage"

import { Switch, Route } from "react-router-dom"

class Content extends Component{
    render(){
        return(
            <div style={{ width: "100%"}}>
               <Switch>
                    <Route exact path="/" component={CategoriesPage} />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route exact path="/products/add" component={ProductCreatePage} />
               </Switch>
            </div>
        )
    }
}

export default Content