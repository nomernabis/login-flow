import React, { Component } from "react"

class Step extends Component{
    render(){
        const { component: Component } = this.props
        return (
            <Component {...this.props} />
        )
    }
}

export default Step