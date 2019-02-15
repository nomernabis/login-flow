import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { TableHeader } from "../_Table"
import SingleSelectTableItem from "./SingleSelectTableItem"

class SingleSelectTable extends Component{
    render(){
        const { items, displayedCols, header, current } = this.props
        return (
            <div className="table">
                <TableHeader columns={header} />
                    {items && items.length > 0 ? items.map(item => 
                        <SingleSelectTableItem 
                            onClick={() => this.props.onClick(item)} isActive={item.id == current.id} displayedCols={displayedCols} item={item} />) 
                        : <div>No data</div>}
            </div>
        )
    }
}

SingleSelectTable.propTypes = {
    items: PropTypes.array.isRequired,
    displayedCols: PropTypes.array,
    header: PropTypes.array,
    type: PropTypes.string,
    mapState: PropTypes.func
}

export default connect()(SingleSelectTable)