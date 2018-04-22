import React, { Component } from 'react';
import {getBrand} from '../../ajax/Category'

class Brand extends Component {
    constructor(props){
        super(props)
        this.state={
            data:'',
            status:false
        }
    }

    

    render() {
        return (
            <div>
                {this.state.status&&<section className='brand-list'>
                    {this.state.data.map((value,index)=>{
                        return <dl>
                            <dt id={value.cap}>{value.cap}</dt>
                            {value.list.map((v,i)=>{
                                return <dd>
                                    <span>{v.cname}</span>
                                    <span>{v.ename}</span></dd>
                            })}
                        </dl>
                    })}
                    <div className='brand-view'>
                        {this.state.data.map((value,index)=>{
                            return <div><a href={`#${value.cap}`}>{value.cap}</a></div>
                        })}
                    </div>
                    </section>
                }
            </div>
        );
    }
    componentDidMount() {
        getBrand().done(res=>{
            this.setState({
                data:res.rp_result.brands,
                status:true
            })
            console.log(this.state.data)
        })
    }
}

export default Brand;