import React, { Component } from "react"
import { Editor, EditorState, RichUtils } from "draft-js"

import StyleButton from "./StyleButton"


class TextEditor extends Component{
    constructor(props){
        super(props)
    }

    onStyleButtonClick = styleName => {
        this.props.onChange(RichUtils.toggleInlineStyle(this.props.description, styleName))
    }

    toggleBlockType = blockType => {
        this.props.onChange(RichUtils.toggleBlockType(this.props.description, blockType))
    }

    handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(this.props.description, command)
        if(newState){
            this.props.onChange(newState)
            return 'handled'
        }

        return 'not-handled'
    }

    render(){
        const currentStyle = this.props.description.getCurrentInlineStyle()
        const selection = this.props.description.getSelection()
        const blockType = this.props.description
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType()
        return (
                <div className="text-editor">
                    <div style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.3)", padding: '8px'}}>
                        <StyleButton
                            active = {currentStyle.has('BOLD')}
                            label='B'
                            onToggle = {() => this.onStyleButtonClick('BOLD')}
                        />
                         <StyleButton
                            active = {currentStyle.has('ITALIC')}
                            label='I'
                            onToggle = {() => this.onStyleButtonClick('ITALIC')}
                        />
                         <StyleButton
                            active = {currentStyle.has('UNDERLINE')}
                            label='U'
                            onToggle = {() => this.onStyleButtonClick('UNDERLINE')}
                        />
                         <StyleButton
                            active = {blockType === 'unordered-list-item'}
                            label='UL'
                            onToggle = {() => this.toggleBlockType('unordered-list-item')}
                        />
                         <StyleButton
                            active = {blockType === 'ordered-list-item'}
                            label='OL'
                            onToggle = {() => this.toggleBlockType('ordered-list-item')}
                        />
                    </div>
                    <div style={{ padding: "16px 0"}}>
                        <Editor 
                            editorState={this.props.description}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.props.onChange} 
                        />
                    </div>
                </div>
        )
    }
}

export default TextEditor