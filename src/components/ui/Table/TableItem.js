import React from "react"

const TableItem = (props) => {
    const { item, displayedColumns, itemClasses } = props
    const content = displayedColumns.map(prop => {
                    return <div className="table-col">{ props.getColumn ? props.getColumn(prop, item[prop]) : item[prop] }</div>
                })
    return(
        <div className={"table-row material-text-normal " + itemClasses}>
            {content}
        </div>
    )
}


export default TableItem