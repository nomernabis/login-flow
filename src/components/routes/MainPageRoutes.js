import React, { Component } from "react"

import { CategoriesPage, ProductsPage, ProductCreatePage,
         AttributesPage, AttributeCreatePage, UsersPage, UserFormPage, UserEditPage} from "../pages"
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
                    <Route exact path="/users" component={UsersPage} />
                    <Route exact path="/users/add" component={UserFormPage} />
                    <Route exact path="/users/edit/:id" component={UserEditPage} />
               </Switch>
            </div>
        )
    }
}

export default MainPageRoutes