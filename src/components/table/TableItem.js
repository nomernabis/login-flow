import React from "react"
import "../../styles/Table.css"
import { showInfoModal } from "../../actions";

export const TableItem = ({ item, onEdit, onDelete }) => {
    const content = Object.keys(item).map(prop => (<div className="table-col">{ item[prop] }</div>))
    return(
        <div className="table-row material-text-normal">
            {content}
            <div className="table-col"><button onClick={onEdit}>Edit</button><button onClick={onDelete}>Delete</button></div>
        </div>
    )
}