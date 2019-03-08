import React from "react"
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle"
import { Icon } from "react-icons-kit"

const SelectableTableItem = ({ item, displayedColumns, itemClasses, onClick }) => {
    const content = displayedColumns.map(prop => (<div className="table-col">{ item[prop] }</div>))
    return(
        <div className={"table-row material-text-normal " + itemClasses} onClick={onClick}>
            {content}
            <div className="table-col">
                {
                <div className="table-col" style={{ display: 'flex', flexDirection:  'row-reverse' }}>
                    <div style={{ background: 'none', outline: 0, border: 0, color: item.isActive ? '#1f6ff7' : 'rgb(196, 196, 196)'}}>
                        <Icon size={32} icon={ic_check_circle} />
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default SelectableTableItem