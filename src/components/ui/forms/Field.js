import React from "react"

import "../../../styles/Field.css"

const Field = ({ type, name, label, value, error, onChange, width, marginBottom}) => (
    <div style={{width: width ? width : '300px', marginBottom: marginBottom ? marginBottom : '45px'}} className="material-group">
        <input className="material-input" type={type} name={name} value={value} onChange={onChange} required /><br />
        <span className="bar"></span>
        <label className="material-label" htmlFor={name}>{label}</label><br />
        {error && <span>{error}</span>}
    </div>
)

export default Field