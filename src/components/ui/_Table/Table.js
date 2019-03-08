import React, { Component } from "react"
import { TableItem } from "./TableItem"
import { connect } from "react-redux"

import TableHeader from "./TableHeader"
import { showModal, showInfoModal } from "../../../actions"

class Table extends Component{
    render(){
        const { items, dispatch, onCategorySelected, selected } = this.props
        console.log('items', items)
        return (
            <div className="table">
                <TableHeader columns={this.props.columns} />
                {items && items.length > 0 ? items.map(item => 
                                    <TableItem 
                                        isSelected={selected ? selected[item.id] : false}
                                        onCategorySelected={() => onCategorySelected(item)}
                                        selectable={this.props.selectable}
                                        item={item}
                                        showCols={this.props.showCols}
                                        onDelete={() => dispatch(showInfoModal(item))}
                                        onEdit={() => dispatch(showModal(item))}/>) : <div>No data</div>}
            </div>
        )
    }
}

export default connect()(Table)