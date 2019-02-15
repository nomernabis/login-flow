import React from "react"
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle"
import { Icon } from "react-icons-kit"

const SelectTableItem = ({ item, displayedCols, isActive, onClick }) => {
    let content
    if(displayedCols){
        content = displayedCols.map(prop => <div className="table-col">{ item[prop] }</div>)
    } else {
        content = Object.keys(item).map(prop => <div className="table-col">{ item[prop] }</div>)
    }
    
    let classes = "table-row material-text-normal "
    if(isActive){
        classes += "active"
    }
    
    return(
        <div className={classes} onClick={onClick}>
            {content}
            <div className="table-col" style={{ display: 'flex', flexDirection:  'row-reverse' }}>
                <button style={{ background: 'none', outline: 0, border: 0, color: isActive ? '#1f6ff7' : 'rgb(196, 196, 196)'}}>
                            <Icon size={32} icon={ic_check_circle} />
                </button>
            </div>
        </div>
    )
}

export default SelectTableItem