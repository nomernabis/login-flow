import React, { Component } from "react"

import CategoriesPage from "./pages/CategoriesPage"
import ProductsPage from "./pages/ProductsPage"
import ProductCreatePage from "./pages/ProductCreatePage"
import AttributesPage from "./pages/AttributesPage"

import { Switch, Route } from "react-router-dom"
import AttributeCreatePage from "./pages/AttributeCreatePage"

class Content extends Component{
    render(){
        return(
            <div style={{ width: "100%"}}>
               <Switch>
                    <Route exact path="/" component={CategoriesPage} />
                    <Route exact path="/products" component={ProductsPage} />
                    <Route exact path="/products/add" component={ProductCreatePage} />
                    <Route exact path="/attributes" component={AttributesPage} />
                    <Route exact path="/attributes/add" component={AttributeCreatePage} />
               </Switch>
            </div>
        )
    }
}

export default Content