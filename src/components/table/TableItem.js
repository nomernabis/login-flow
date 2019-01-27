import React from "react"
import "../../styles/Table.css"
import { showInfoModal } from "../../actions"
import EditIcon from "../../icons/edit.svg"
import TrashIcon from "../../icons/delete.svg"

export const TableItem = ({ item, onEdit, onDelete }) => {
    const content = Object.keys(item).map(prop => (<div className="table-col">{ item[prop] }</div>))
    return(
        <div className="table-row material-text-normal">
            {content}
            <div className="table-col">
                <button className="btn" onClick={onEdit}><EditIcon fill="#fff" width={24} height={24} /></button>
                <button className="btn" onClick={onDelete}><TrashIcon fill="#fff" width={24} height={24} /></button></div>
        </div>
    )
}