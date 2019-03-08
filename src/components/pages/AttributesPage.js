import React, { Component } from "react"
import { fetchAttributes } from "../../actions"
import TableContainer from "../../containers/TableContainer"
import FloatingActionButton from "../ui/FloatingActionButton"
import { withRouter } from "react-router-dom"
import { ic_add } from "react-icons-kit/md"

class AttributesPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <TableContainer 
                    showCols={['name', 'displayed_name']}
                    columns={["Name", "Displayed Name", "Action"]}
                    loadData={fetchAttributes}
                    dataName="attributes"
                />
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_add} action={() => this.props.history.push('/attributes/add') } />
                </div>
            </div>
        )
    }
}

export default withRouter(AttributesPage)