import React, { Component } from "react"
import { fetchAttributes, addProductSelectAttribute, addProductSelectAttributeValue } from "../../../../actions"
import { SingleSelectTable } from "../../_SingleSelectTable"
import { SelectTable } from "../../_SelectTable"
import { connect } from "react-redux"
import { Table, SelectableTableItem, SingleSelectTableItem } from "../../Table"

class AttributesStep extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //this.props.dispatch(fetchAttributes())
    }
    render(){
        const { current, selected, items, dispatch, attributeValues } = this.props
        console.log('selected', selected)
        return (
            <div>
                <div style={{ display: 'flex', flexBasis: '0'}}>
                    <div style={{ display: 'inline-block', width: '60%', padding: '0 16px'}}>
                        {/* <SingleSelectTable
                            onClick={attribute => dispatch(addProductSelectAttribute(attribute))}
                            current={current}
                            selected={selected}
                            items={items}
                            displayedCols={['name', 'displayed_name']}
                            header={['Name', 'Displayed Name']} /> */}
                        
                        {/* <Table 
                            itemClasses='selectable-row'
                            excludeColumns={['id']}
                            items={this.props.categories}
                            loadData={this.props.loadData}
                            tableItem={SelectableTableItem}
                            onClick={this.props.onClick}
                        /> */}
                        <Table
                            items={items.map(item => {
                                if(item.id == current.id){
                                    item.isSelected = true
                                } else {
                                    item.isSelected = false
                                }
                                if(selected && selected[item.id] && Object.keys(selected[item.id]).length != 0){
                                    item.isActive = true
                                } else {
                                    item.isActive = false
                                }
                                return item
                            })}
                            loadData = {() => this.props.dispatch(fetchAttributes())}
                            tableItem={SingleSelectTableItem}
                            excludeColumns={['id', 'values']}
                            headerColumns={['Name', 'Displayed Name']}
                            itemClasses='selectable-row'
                            onClick={attribute => dispatch(addProductSelectAttribute(attribute))}
                        />
                    </div>
                    <div style={{ display: 'inline-block', width: '40%', padding: '0 16px'}}>
                        <SelectTable 
                            selected={selected[current.id]}
                            onClick={value => dispatch(addProductSelectAttributeValue(value, current.id))}
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
    selected: state.products.form.selected.attributes,
    items: state.attributes.items,
    attributeValues: state.products.form.selected.attributes.current ? state.products.form.selected.attributes.current.values : [],
})

export default connect(mapStateToProps)(AttributesStep)