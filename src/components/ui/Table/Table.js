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
            limit: 5,
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
        this.props.loadData(limit, limit * currentPage)
    }
    onChange(limit){
        this.setState({ limit , currentPage: 0 })
    }
    onPageChanged(currentPage){
        this.setState({ currentPage })
    }
    componentDidUpdate(prevProps, prevState){
        const { currentPage, limit } = this.state
        if(currentPage != prevState.currentPage || limit != prevState.limit){
            this.props.loadData(limit, limit * currentPage)
        }
    }
    prev(){
        this.setState({ currentPage: this.state.currentPage - 1})
    }
    next(){
        this.setState({ currentPage: this.state.currentPage + 1})
    }
    render(){
        console.log('currentPage', this.state.currentPage)
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
                            {items.map(item => <TableItem {...this.props.tableItemProps}
                             onClick={this.props.onClick ? () => this.props.onClick(item) : null} itemClasses={this.props.itemClasses}
                              item={item} displayedColumns={displayedItemColumns} />)}
                            {this.props.pagination && (
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '56px', padding: '0 16px'}}>
                                     <Paginator prev={this.prev} 
                                        next={this.next}
                                        currentPage = {this.state.currentPage} 
                                        onClick={this.onPageChanged} total={ this.props.data.count / this.state.limit } />
                                    <NumberSelect items={[  {name: '5', value: '5'}, 
                                                            {name: '10', value: '10'},
                                                            {name: '50', value: '50'}]} limit={this.state.limit} onChange={this.onChange} />
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