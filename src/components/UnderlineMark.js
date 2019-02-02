import React from "react"

const UnderLineMark = props => (
    <u {...props.attributes}>
        {props.children}
    </u>
)

export default UnderLineMark