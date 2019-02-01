import React, { Component } from "react"
import { Editor } from "slate-react"
import { Value } from "slate"
import BoldMark from "./BoldMark"
import ItalicMark from "./ItalicMark"

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'My First Paragraph!'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})


class TextEditor extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: initialValue
        }
        this.onChange = this.onChange.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.renderMark = this.renderMark.bind(this)
    }

    onChange({ value }){
        this.setState({ value })
    }

    renderMark(props){
        switch(props.mark.type){
            case 'bold':
                return <BoldMark {...props} />
            case 'italic':
                return <ItalicMark {...props} />
        }
    }

    onKeyDown(e, change){

        if(!e.ctrlKey){ return }
        e.preventDefault()
        switch(e.key){
            case 'b': {
                change.addMark('bold')
                return true
            }
            case 'i': {
                change.addMark('italic')
                return true
            }
        }
    }

    render(){
        return (
            <Editor 
                value={this.state.value} 
                onChange={this.onChange} 
                onKeyDown = {this.onKeyDown}
                renderMark = {this.renderMark} />
        )
    }
}

export default TextEditor