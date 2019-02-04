import React, { Component } from "react"
import { TableItem } from "./TableItem"
import { connect } from "react-redux"

import TableHeader from "./TableHeader"
import { showModal, showInfoModal } from "../../actions"

import "../../styles/Table.css"

class Table extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { items, dispatch, onCategorySelected, selected } = this.props
        return (
            <div className="table">
                <TableHeader columns={this.props.columns} />
                {items.map(item => <TableItem 
                                        isSelected={selected[item.id]}
                                        onCategorySelected={() => onCategorySelected(item)}
                                        selectable={this.props.selectable}
                                        item={item}
                                        showCols={this.props.showCols}
                                        onDelete={() => dispatch(showInfoModal(item))}
                                        onEdit={() => dispatch(showModal(item))}/>)}
            </div>
        )
    }
}

export default connect()(Table)