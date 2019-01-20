import React from "react"

export const Field = ({ type, name, value, error, onChange }) => (
    <div>
        <input type={type} name={name} value={value} onChange={onChange} /><br />
        {error && <span>{error}</span>}
    </div>
)