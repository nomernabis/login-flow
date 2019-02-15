import React from "react"

import "../../../styles/TableItem.css"

const SingleSelectTableItem = ({ item, displayedCols, isActive, onClick }) => {
    let content
    if(displayedCols){
        content = displayedCols.map(prop => <div className="table-col">{ item[prop] }</div>)
    } else {
        content = Object.keys(item).map(prop => <div className="table-col">{ item[prop] }</div>)
    }
    
    let classes = "table-row material-text-normal selectable"
    if(isActive){
        classes += " active"
    }
    
    return(
        <div className={classes} onClick={onClick}>
            {content}
        </div>
    )
}

export default SingleSelectTableItem