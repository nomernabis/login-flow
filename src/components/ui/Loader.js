import React from "react"

import "../styles/Loader.css"

export const Loader = ({ isVisible, width=60, height=60 }) => (
    <div style={{ width: width + "px", height: height + "px", opacity: isVisible ? 1 : 0, boxSizing: "border-box", display: "inline-block"}} className="loader">
    </div>
)