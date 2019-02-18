import React, { Component } from "react"
import ImageView from "./ImageView"

class Images extends Component{
    render(){
        const { images, onDelete } = this.props
        console.log('Images', images)
        return (
            <div>
                {
                    images.map( (image, i) => <ImageView id={i} onDrop={this.props.onDrop} src={image} onDelete={() => onDelete(i)} /> )
                }
            </div>
        )
    }
}

export default Images