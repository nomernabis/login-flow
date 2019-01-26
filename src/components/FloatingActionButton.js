import React from "react"
import "../styles/FloatingActionButton.css"

export const FloatingActionButton = ({ action }) => (
    <button className="fab" onClick={action}>
        +
    </button>
)