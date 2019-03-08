import React, { Component } from "react"

class TableHeader extends Component{
    render(){
        const { columns } = this.props
        return (
            <div className="table-row table-head material-text-header">
                {columns.map(column => <div className="table-col">{ column }</div>)}
            </div>
        )
    }
}

export default TableHeader