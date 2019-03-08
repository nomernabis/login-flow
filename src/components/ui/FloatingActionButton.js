import React from "react"
import "../../styles/FloatingActionButton.css"
import { Icon } from "react-icons-kit"

const FloatingActionButton = ({ action, icon}) => (
    <button className="fab" onClick={action}>
        <Icon size={32} icon={icon}  />
    </button>
)

export default FloatingActionButton