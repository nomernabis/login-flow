import React from "react"

const TableItem = ({ item, displayedColumns, itemClasses }) => {
    const content = displayedColumns.map(prop => (<div className="table-col">{ item[prop] }</div>))
    return(
        <div className={"table-row material-text-normal " + itemClasses}>
            {content}
        </div>
    )
}


export default TableItem