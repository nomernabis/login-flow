import React, { Component } from "react"
import "../../../styles/Paginator.css"
import { ic_arrow_forward, ic_arrow_back } from "react-icons-kit/md"
import { Icon } from "react-icons-kit"

class Paginator extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { total, currentPage } = this.props
        let links = []
        for(let i=0; i < total; ++i){
            let classes = "text-button "
            if(i == currentPage){
                classes += "current-page"
            }
            links.push(<a className={classes} onClick={() => this.props.onClick(i)}>{i+1}</a>)
        }
        return (
            <div className="paginator">
                <a className="text-button" onClick={() => {
                    if(currentPage == 0) return
                    this.props.prev()
                }}>
                    <Icon icon={ic_arrow_back} />
                </a>
                {links.map(link => link)}
                <a className="text-button" onClick={() => {
                    if(currentPage >= total - 1) return 
                    this.props.next()
                }}>
                    <Icon icon={ic_arrow_forward} />
                </a>
            </div>
        )
    }
}

export default Paginator