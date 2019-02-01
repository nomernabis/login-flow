import React, { Component } from "react"
import { Editor, EditorState, RichUtils } from "draft-js"

class MyEditor extends Component{
    constructor(props){
        super(props)
        this.state = { editorState: EditorState.createEmpty() }
        this.onChange = (editorState) => this.setState({ editorState })
        this.onBoldClick = this.onBoldClick.bind(this)
        this.onUnderlineClick = this.onUnderlineClick.bind(this)
        this.onItalicClicked = this.onItalicClicked.bind(this)
    }

    onBoldClick(e) {
        e.preventDefault()
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'BOLD'
        ))
    }

    onUnderlineClick(e) {
        e.preventDefault()
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'UNDERLINE'
        ))
    }

    onItalicClicked(e){
        e.preventDefault()
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'ITALIC'
        ))
    }

    render(){
        return (
            <div>
                <div>Draft.js text editor</div>
                <button onClick={this.onBoldClick}><b>B</b></button>
                <button onClick={this.onItalicClicked}><em>I</em></button>
                <button onClick={this.onUnderlineClick}>U</button>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />
            </div>
        )
    }
}

export default MyEditor