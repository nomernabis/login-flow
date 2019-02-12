import React from "react"
import "../../styles/FloatingActionButton.css"

const FloatingActionButton = ({ action, value }) => (
    <button className="fab" onClick={action}>
        {value}
    </button>
)

export default FloatingActionButton