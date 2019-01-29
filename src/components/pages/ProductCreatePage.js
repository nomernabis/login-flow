import React, { Component } from "react"
import StepIndicator from "../StepIndicator"

class ProductCreatePage extends Component{
    render(){
        return (
            <div className="page-container">
                Product Create Page
                <StepIndicator steps={['Клиент', 'Дата и Время', 'Услуги', 'Исполнители', 'Подтверждение']} />
            </div>
        )
    }
}

export default ProductCreatePage