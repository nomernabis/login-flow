import React, { Component } from "react"

import CategoriesPage from "./pages/CategoriesPage"
import ProductsPage from "./pages/ProductsPage"

import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

class Content extends Component{
    render(){
        return(
            <div style={{ width: "100%"}}>
               <Switch>
                    <Route exact to="/" component={CategoriesPage} />
                    <Route to="/products" component={ProductsPage} />
               </Switch>
            </div>
        )
    }
}

export default Content