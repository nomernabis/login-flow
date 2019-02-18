import React, { Component } from "react"
import Images from "./Images"
import { addProductAddImage, addProductDeleteImage, addProductSwapImages } from "../../../../actions"
import { connect } from "react-redux"

class ImageUploadStep extends Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.swapImages = this.swapImages.bind(this)
    }
    swapImages(lhs, rhs){
        this.props.dispatch(addProductSwapImages(lhs, rhs))
    }
    onDelete(i){
        this.props.dispatch(addProductDeleteImage(i))
    }
    onChange(e){
        const image = Array.from(e.target.files)
            .map(file => URL.createObjectURL(file))[0]
        
        this.props.dispatch(addProductAddImage(image))
    }
    render(){
        const { images } = this.props
        return (
            <div>
                <input type="file" id="single" onChange={this.onChange} autoComplete="off" />
                {
                    images && (
                        <Images onDrop={this.swapImages} images={images} onDelete={this.onDelete} />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    images: state.products.form.selected.images
})

export default connect(mapStateToProps)(ImageUploadStep)