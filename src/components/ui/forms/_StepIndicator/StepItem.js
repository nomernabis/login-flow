import React, { Component } from "react"
import CircleIcon from "../../CirlceIcon"
import { ic_check } from "react-icons-kit/md"

class StepItem extends Component{
    render(){
        const { name, number, isActive, error, isCompleted } = this.props
        let itemClasses = "step-item-text "
        if(error) {
            itemClasses += "step-item-error "
        } else
        if(isActive || isCompleted){
            itemClasses += "step-item-active "
        } else  {
            itemClasses += "step-item-normal "
        }
        return (
            <div onClick={() => this.props.onClick(number-1)} className="step-item">
                <div className="step-item-content">
                    <div>
                        <CircleIcon icon={isCompleted ? ic_check : null} number={number} color={isActive ? '#1f6ff7': '#c4c4c4'} />
                    </div>
                    <div className={itemClasses}>
                        { name }
                    </div>
                </div>
            </div>
        )
    }
}

export default StepItem