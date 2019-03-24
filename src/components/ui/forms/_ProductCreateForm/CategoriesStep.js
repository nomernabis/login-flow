import React, { Component } from "react"
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
                        items={this.props.items}
                        data={this.props.data}
                        loadData={this.props.loadData}
                        tableItem={SelectableTableItem}
                        onClick={this.props.onClick}
                        pagination={true}
                    />
                </div>
            </div>
        )
    }
}

export default CategoriesStep