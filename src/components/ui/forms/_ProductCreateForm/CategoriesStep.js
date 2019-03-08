import React, { Component } from "react"
import { TableContainer } from "../../../../containers"
import { Table, SelectableTableItem } from "../../Table"

class CategoriesStep extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { error } = this.props
        return (
            <div>
                {error && <span style={{ color: 'red' }}>{ error }</span>}
                <div style={{ width: '60%'}}>
                    <Table 
                        itemClasses='selectable-row'
                        excludeColumns={['id']}
                        items={this.props.categories}
                        loadData={this.props.loadData}
                        tableItem={SelectableTableItem}
                        onClick={this.props.onClick}
                    />
                    {/* <TableContainer 
                        showCols={['name']}
                        dataName="categories"
                        selectedDataStore="products"
                        selectable={true}
                        loadData={fetchCategories}
                        columns={[ "Name" ]} /> */}
                </div>
            </div>
        )
    }
}

export default CategoriesStep