import React, { Component } from "react"
import { fetchAttributes, addProductSelectAttribute, addProductSelectAttributeValue } from "../../../../actions"
import { SingleSelectTable } from "../../_SingleSelectTable"
import { SelectTable } from "../../_SelectTable"
import { connect } from "react-redux"

class AttributesStep extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.dispatch(fetchAttributes())
    }
    render(){
        const { current, selected, items, dispatch, attributeValues } = this.props
        return (
            <div>
                <div style={{ display: 'flex', flexBasis: '0'}}>
                    <div style={{ display: 'inline-block', width: '60%', padding: '0 16px'}}>
                        <SingleSelectTable
                            onClick={attribute => dispatch(addProductSelectAttribute(attribute))}
                            current={current}
                            selected={selected}
                            items={items}
                            displayedCols={['name', 'displayed_name']}
                            header={['Name', 'Displayed Name']} />
                    </div>
                    <div style={{ display: 'inline-block', width: '40%', padding: '0 16px'}}>
                        <SelectTable 
                            selected={selected}
                            onClick={value => dispatch(addProductSelectAttributeValue(value))}
                            header={['Name']}
                            displayedCols={['name']}
                            items={attributeValues} />
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => ({
    current: state.products.form.selected.attributes.current,
    selected: state.products.form.selected.attributes.values,
    items: state.attributes.items,
    attributeValues: state.products.form.selected.attributes.current ? state.products.form.selected.attributes.current.values : [],
})

export default connect(mapStateToProps)(AttributesStep)