import React, { Component } from "react"
import TableHeader from "./TableHeader"
import PropTypes from "prop-types"
import TableItem from "./TableItem"


class Table extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('table did mount')
        this.props.loadData()
    }
    render(){

        const { tableItem: TableItem, items, displayedColumns } = this.props
        let displayedItemColumns
        if(displayedColumns){
            displayedItemColumns = displayedColumns
        } else {
            if(items && items.length > 0){
                displayedItemColumns = Object.keys(items[0])
            }
        }
        
        if(this.props.excludeColumns){
            this.props.excludeColumns.forEach( excludeCol => {
                if(displayedItemColumns){
                    displayedItemColumns = displayedItemColumns.filter(col => col != excludeCol)
                }
            })
        }
      
        return (
            <div className="table">
                 { items && items.length > 0 ? (
                     <div>
                        <div>
                            {this.props.headerColumns && <TableHeader columns={this.props.headerColumns} />}
                            {items.map(item => <TableItem {...this.props.tableItemProps} onClick={this.props.onClick ? () => this.props.onClick(item) : null} itemClasses={this.props.itemClasses} item={item} displayedColumns={displayedItemColumns} />)}
                        </div>
                     </div>
                 ) : (<div>No DATA</div>)
                }
            </div>
        )
    }
}

Table.defaultProps = {
    tableItem: TableItem, 
    itemClasses: ''
}

export default Table