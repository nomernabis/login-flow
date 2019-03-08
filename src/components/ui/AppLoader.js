import React, { Component } from "react"
import { Loader } from "./Loader"
import "../../styles/Loader.css"

import { connect } from "react-redux"

class AppLoader extends Component{
    render(){
        const { isVisible } = this.props
        return (
            <div className="loader-bg" style={{ display: isVisible ? 'flex' : 'none'}}>
               <Loader isVisible={isVisible} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isVisible: state.loader.isVisible
})

export default connect(mapStateToProps)(AppLoader)