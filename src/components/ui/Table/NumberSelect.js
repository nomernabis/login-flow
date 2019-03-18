import React, { Component } from "react"

import "../../../styles/NumberSelect.css"

class NumberSelect extends Component{
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0].value
    }
    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }))
    }
    render(){   
        return <div style={{display: 'flex', alignItems: 'center'}}> 
                   <span style={{marginRight: '8px', color: 'rgba(0, 0, 0, .54)'}}> Show: </span>
                    <div  className="select-box--container">
                        <div onClick={this.dropDown} className="select-box--selected-item-container">
                            <div className="select-box--selected-item">
                                {this.props.limit}
                            </div>
                            <div className="select-box--arrow">
                                <span className={`${this.state.showItems ? "select-box--arrow-up": "select-box--arrow-down"}`} />
                            </div>
                        </div>
                        <div className="select-box--items" style={{ display: this.state.showItems ? 'block' : 'none'}}>
                            {
                                this.state.items.map(item => <div 
                                    key={item.value}
                                    onClick={() => {
                                        this.props.onChange(item.value)
                                        this.dropDown()
                                    }}
                                    className={this.state.selectedItem === item ? 'select-box--selected' : ''}
                                >
                                        { item.name }
                                    </div>
                                )
                            }
                        </div>
                    </div>
             </div>
    }
}

export default NumberSelect