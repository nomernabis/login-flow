import React, { Component } from "react"
import { fetchAttributes } from "../../actions"
import FloatingActionButton from "../ui/FloatingActionButton"
import { withRouter } from "react-router-dom"
import { ic_add } from "react-icons-kit/md"

import { Table } from "../ui/Table"
import ActionsTableItem from "../ui/Table/ActionsTableItem"

import { connect } from "react-redux"

class AttributesPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { dispatch } = this.props
        return(
            <div>
                <div style={{padding: "32px", height: "100%", boxSizing: "border-box"}}>
                    <Table
                        tableItem={ActionsTableItem}
                        loadData={(limit, offset) => dispatch(fetchAttributes(limit, offset))}
                        items={this.props.attributes.results}
                        data={this.props.attributes}
                        headerColumns={['Name', 'Displayed Name', 'Actions']}
                        displayedColumns={['name', 'displayed_name']}
                        pagination={true}
                    />
                    <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                        <FloatingActionButton icon={ic_add} action={() => this.props.history.push('/attributes/add')} />
                    </div>
                </div>    
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    attributes: state.attributes.response
})

export default withRouter(connect(mapStateToProps)(AttributesPage))