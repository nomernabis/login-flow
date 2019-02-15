import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { TableHeader } from "../_Table"
import SelectTableItem from "./SelectTableItem"
import "../../../styles/Table.css"

class SelectTable extends Component{
    render(){
        const { items, displayedCols, header, selected } = this.props
        return (
            <div className="table">
                <TableHeader columns={header} />
                    {items && items.length > 0 ? items.map( item => 
                        <SelectTableItem isActive={selected[item.id]} onClick={() => this.props.onClick(item)} displayedCols={displayedCols} item={item} />) 
                            : <div>No data</div>}
            </div>
        )
    }
}

SelectTable.propTypes = {
    items: PropTypes.array.isRequired,
    displayedCols: PropTypes.array,
    header: PropTypes.array,
    type: PropTypes.string,
    mapState: PropTypes.func
}


export default connect()(SelectTable)