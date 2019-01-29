import React from "react"

import CircleIcon from "./CirlceIcon"

import "../styles/StepIndicator.css"

export const StepItem = ({ name, number }) => (
        <div className="step-item">
            <div>
                <div style={{display: 'inline-block'}}>
                    <CircleIcon number={number} />
                </div>
                <div style={{display: 'inline-block', marginLeft: '16px'}}>
                    { name }
                </div>
            </div>
        </div>
)