import React, { Component } from "react"
import { fetchAttributes } from "../../actions"
import TableContainer from "../../containers/TableContainer"

class AttributesStep extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div style={{ width: '60%'}}>
                    <TableContainer 
                        showCols={['displayed_name', 'name', ]}
                        dataName="attributes"
                        selectedDataStore="products"
                        selectable={true}
                        loadData={fetchAttributes}
                        columns={["Displayed Name", "Name", ""]} />
                </div>
            </div>
        )
    }
}

export default AttributesStep