import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"

import { auth, categories, modal, products } from "./reducers"

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState){
    return createStore(combineReducers({ auth, categories, modal, products }), 
                        preloadedState,
                        applyMiddleware(thunkMiddleware, loggerMiddleware))
}