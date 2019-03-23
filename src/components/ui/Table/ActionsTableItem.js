import React from "react"
import TableItem from "./TableItem"

import { ic_edit, ic_delete } from "react-icons-kit/md"
import { Icon } from "react-icons-kit"

class ActionsTableItem extends React.Component{
    render(){
        const { item, displayedColumns, itemClasses } = this.props
        console.log('item action', item)
        const content = displayedColumns.map(prop => {
            return <div className="table-col">{ this.props.getColumn ? this.props.getColumn(prop, item[prop]) : item[prop] }</div>
        })
        return(
            <div className={"table-row material-text-normal " + itemClasses}>
                {content}
                <div className="table-col">
                    <div onClick={() => this.props.onEdit(item)} style={{color: 'black', cursor: 'pointer'}}>
                        <Icon icon={ic_edit} size={24} />
                    </div>
                    <div onClick={() => this.props.onDelete(item)} style={{color: 'black', cursor: 'pointer', marginLeft: '8px'}}>
                        <Icon icon={ic_delete} size={24} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ActionsTableItem