import React from "react"
import "../styles/FloatingActionButton.css"

export const FloatingActionButton = ({ action, value }) => (
    <button className="fab" onClick={action}>
        {value}
    </button>
)