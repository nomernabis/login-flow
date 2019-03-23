import React, { Component } from "react"
import TableHeader from "./TableHeader"
import PropTypes from "prop-types"
import TableItem from "./TableItem"
import NumberSelect from "./NumberSelect"
import Paginator from "./Paginator"

class Table extends Component{
    constructor(props){
        super(props)
        this.state = {
            limit: {name: '5', value: '5'},
            offset: 0,
            currentPage: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onPageChanged = this.onPageChanged.bind(this)
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
    }
    componentDidMount(){
        const { limit, currentPage } = this.state
        this.props.loadData(Number(limit.value), Number(limit.value) * currentPage)
    }
    onChange(limit){
        this.setState({ limit , currentPage: 0 })
    }
    onPageChanged(currentPage){
        this.setState({ currentPage })
    }
    componentDidUpdate(prevProps, prevState){
        const { currentPage, limit } = this.state
        if(currentPage != prevState.currentPage || Number(limit.value) != Number(prevState.limit.value)){
            this.props.loadData(Number(limit.value), Number(limit.value) * currentPage)
        }
    }
    prev(){
        this.setState({ currentPage: this.state.currentPage - 1})
    }
    next(){
        this.setState({ currentPage: this.state.currentPage + 1})
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
        
        console.log('limit', this.state.limit)
        return (
            <div className="table">
                 { items && items.length > 0 ? (
                     <div>
                        <div>
                            {this.props.headerColumns && <TableHeader columns={this.props.headerColumns} />}
                            {items.map(item => <TableItem getColumn={this.props.getColumn} onDelete={this.props.onDelete} onEdit={this.props.onEdit}
                                onClick={this.props.onClick ? () => this.props.onClick(item) : null} itemClasses={this.props.itemClasses}
                              item={item} displayedColumns={displayedItemColumns} />)}
                            {this.props.pagination && (
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '56px', padding: '0 16px'}}>
                                     <Paginator prev={this.prev} 
                                        next={this.next}
                                        currentPage = {this.state.currentPage}
                                        onClick={this.onPageChanged} total={ this.props.data.count / Number(this.state.limit.value) } />
                                    <NumberSelect text="Show:" items={[  {name: '5', value: '5'}, 
                                                            {name: '10', value: '10'},
                                                            {name: '50', value: '50'}]} value={this.state.limit} onChange={this.onChange} />
                                </div>
                            )}
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