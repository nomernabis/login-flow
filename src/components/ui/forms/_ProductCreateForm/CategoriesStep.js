import React, { Component } from "react"
import { TableContainer } from "../../../../containers"
import { fetchCategories } from '../../../../actions'

class Categories extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div style={{ width: '60%'}}>
                    <TableContainer 
                        showCols={['name']}
                        dataName="categories"
                        selectedDataStore="products"
                        selectable={true}
                        loadData={fetchCategories}
                        columns={[ "Name" ]} />
                </div>
            </div>
        )
    }
}

export default Categories