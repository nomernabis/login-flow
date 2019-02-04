import React from "react"
import "../../styles/Table.css"
import { showInfoModal } from "../../actions"
import EditIcon from "../../icons/edit.svg"
import TrashIcon from "../../icons/delete.svg"
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle"

import { Icon } from "react-icons-kit"

export const TableItem = ({ item, onEdit, onDelete, showCols, showActions, selectable, onCategorySelected, isSelected }) => {
    const content = showCols.map(prop => (<div className="table-col">{ item[prop] }</div>))
    return(
        <div className="table-row material-text-normal">
            {content}
            <div className="table-col" style={{ display: 'flex', flexDirection: selectable ? 'row-reverse' : 'row'}}>
            { showActions && (<div>
                <button className="btn" onClick={onEdit}><EditIcon fill="#fff" width={24} height={24} /></button>
                <button className="btn" onClick={onDelete}><TrashIcon fill="#fff" width={24} height={24} /></button>
            </div>)}
            {
                selectable && (
                    <button onClick={onCategorySelected} style={{ background: 'none', outline: 0, border: 0, color: isSelected ? '#1f6ff7' : 'rgb(196, 196, 196)'}}>
                        <Icon size={32} icon={ic_check_circle} />
                    </button>
                )
            }
            </div>
        </div>
    )
}