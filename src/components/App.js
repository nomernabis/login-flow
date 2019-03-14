import React from "react"
import { AppRoutes } from "./routes"
import Modal from "./ui/_Modal"
import AppLoader from "./ui/AppLoader"

import "../styles/App.css"

const App = () => (
    <div>
        <AppRoutes />
        <Modal />
        <AppLoader />
    </div>
)

export default App
