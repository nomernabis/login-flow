import React, { Component } from "react"
import PropTypes from "prop-types"
import "../../../../styles/CircleButton.css"

class ImageView extends Component{
    constructor(props){
        super(props)
        this.onDrop = this.onDrop.bind(this)
        this.onDragStart = this.onDragStart.bind(this)
        this.onDragOver = this.onDragOver.bind(this)
    }
    onDrop(e, to){
        e.preventDefault()
        let from = e.dataTransfer.getData('id')
        this.props.onDrop(from, to)
    }
    onDragStart(e, id){
        e.dataTransfer.setData('id', id)
    }
    onDragOver(e){
        e.preventDefault()
    }
    render(){
        const { width, height, src, onDelete, id } = this.props
        return (
            <div style={{ display: 'inline-block', padding: '8px 16px', position: 'relative' }}>
                <div droppable onDrop={e => this.onDrop(e, id)} onDragOver={this.onDragOver}>
                    <button className="circle-button" onClick={onDelete} style={{ position: 'absolute',
                         top: 0,
                        right: 0, width: 30, height: 30 }}>X</button>
                    <img draggable
                        onDragOver={this.onDragOver}
                        onDragStart={e => this.onDragStart(e, id)} 
                        src={src} 
                        style={{ width: width, height: height }} />
                </div>
            </div>
        )
    }
}

ImageView.defaultProps = {
    width: 300,
    height: 200
}

export default ImageView