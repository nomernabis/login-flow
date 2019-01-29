import React, { Component } from "react"
import { Provider } from "react-redux"

import App from "../components/App"
import configureStore from "../configureStore"


const store = configureStore({auth: { token: localStorage.getItem('token')}})

class Root extends Component{
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Root