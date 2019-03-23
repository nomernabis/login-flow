import React from "react"
import UserEditForm from "../ui/forms/_UserEditForm"

class UserFormPage extends React.Component{
    render(){
        return (
            <div className="page-container">
                UsersFormPage
                <UserEditForm />
            </div>
        )
    }
}

export default UserFormPage