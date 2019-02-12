import React from "react"
import { AppRoutes } from "./routes"
import Modal from "./ui/Modal"

import "../styles/App.css"

const App = () => (
    <div>
        <AppRoutes />
        <Modal />
    </div>
)

export default App
