import React from "react"
import { Table } from "../ui/Table"
import { connect } from "react-redux"
import { fetchUsers, showModal, hideModal, showLoader, hideLoader } from "../../actions"
import FloatingActionButton from "../ui/FloatingActionButton"
import { ic_add } from "react-icons-kit/md"
import ActionsTableItem from "../ui/Table/ActionsTableItem"
import { Api } from "../../utils"

class UsersPage extends React.Component{
    render(){
        const { dispatch } = this.props
        return (
            <div>
                <div style={{ padding: '32px'}}>
                    <Table
                        onEdit={user => this.props.history.push('/users/edit/'+user.id)}
                        onDelete={user => dispatch(showModal('QUESTION_MODAL', 'Do you want to delete user ' + user.username + '?',
                            () => {
                                Api.delete('users/' + user.id)
                                    .then(response => {
                                        dispatch(hideModal())
                                        dispatch(fetchUsers(5, 0))
                                    })
                            }, () => dispatch(hideModal())))}
                        tableItem={ActionsTableItem}
                        loadData={(limit, offset) => dispatch(fetchUsers(limit, offset))}
                        items={this.props.users.results}
                        data={this.props.users}
                        headerColumns={['Username', 'First Name', 'Last Name', 'Email', 'Role', 'Actions']}
                        displayedColumns={['username', 'first_name', 'last_name', 'email', 'user_type']}
                        pagination={true}
                        getColumn = {(columnName, value) => {
                            if(columnName == 'user_type' ){
                                switch(value){
                                    case 1:
                                        return 'Admin'
                                    case 2:
                                        return 'User'
                                    default:
                                        return 'User'
                                }
                            } 
                            return value
                        }}
                    />
                </div>
                <div style={{position: "fixed", bottom: "32px", right: "32px"}}>
                    <FloatingActionButton icon={ic_add} action={() => this.props.history.push('/users/add')} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.response,
    error: state.users.error,
    isFetching: state.users.isFetching
})

export default connect(mapStateToProps)(UsersPage)