import React, { Component } from "react"

import { CategoriesPage, ProductsPage, ProductCreatePage,
         AttributesPage, AttributeCreatePage } from "../pages"
import { Switch, Route } from "react-router-dom"

class MainPageRoutes extends Component{
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

export default MainPageRoutes