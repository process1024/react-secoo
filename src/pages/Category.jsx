import React, { Component } from 'react';
import TopHeader from '../components/Category/TopHeader'
import CategoryList from '../components/Category/CategoryList'
import Brand from '../components/Category/Brand'

class Category extends Component {
    constructor(props){
        super(props)
        this.state ={
            current:'category'
        }
        this.tabChange = this.tabChange.bind(this)
    }

    tabChange(value){
        // this.state.current == 'category' ? 'category' :'brand'
        this.setState({
            current:value
        })
    }

    render() {
        return (
            <div>
                <TopHeader data={this.props} btnL='分类' btnR='品牌' current={this.state.current} onTab={this.tabChange}></TopHeader>
                {this.state.current==='category'&&<CategoryList></CategoryList>}
                {this.state.current==='brand'&&<Brand></Brand>}
            </div>
        );
    }

}

export default Category;