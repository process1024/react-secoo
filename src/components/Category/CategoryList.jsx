import React, { Component } from 'react';
import {getCategoryData} from '../../ajax/Category'
// import './style.css'

class CategoryList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: [],
            status:false
        }
    }
    render() {
        return (
            <div>
                {this.state.status&& <section className='category-list'>
                    {this.state.list.map((value,index)=>{
                        return <dl key={index}>
                            <dt>{value.name}&nbsp;{value.enName}</dt>
                            <dd>
                                <ul>
                                {value.child.map((v,i)=>{
                                        return <li key={i}>
                                            {v.name}
                                        </li>
                                })}
                                </ul>
                            </dd>
                        </dl>
                    })}
                </section>
                }
                <div className='block'></div>
            </div>
        );
    }
    componentDidMount() {
        getCategoryData().done(res=>{
            this.setState({
                list:res.rp_result.categorys,
                status:true
            })
            // console.log(this.state.list)
        })
    }
}

export default CategoryList;