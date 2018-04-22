import React, { Component } from 'react';
import {getHomeData} from '../../ajax/Home.js'

class List extends Component {
    constructor(props){
        super(props)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            entrance: [],
            list:[],
            status:false
        }
    }

    getImg(obj){
        for (var k in obj) {
            if (k === 'img') {
                return obj[k]
            }
        }
    }
    getTitle(obj){
        for (var k in obj) {
            if (k === 'title') {
                return obj[k]
            }
        }
    }
    getSubTitle(obj){
        for (var k in obj) {
            if (k === 'subTitle') {
                return obj[k]
            }
        }
    }
    imgSize(type){
        switch (type) {
            case '15':
                return 'box-img box15';
            case '16':
                return 'box-img box16';
            case '17':
                return 'box-img box17';
            default :
                return 
        }
    }

    render() {
        return (
            <div>
                <div className='entrance'>
                    <ul>
                    {
                        this.state.status&&this.state.entrance.map((value,index)=>{
                            return <li key={index} style={{zIndex:index+1}} className="entrance-li fl">
                                <a>
                                    <img src={value.img} alt="这是个图片"/>
                                    <p>{value.title}</p>
                                </a>
                            </li>
                        })
                    }
                    </ul>
                </div>
                {
                    this.state.status&&this.state.list.map((value,index)=>{
                        return <div key={index} className={this.imgSize(value.type)}>
                            {
                                this.getImg(value.content)&&<div>
                                <img  src={this.getImg(value.content)} alt=""/>
                                    <p className='listTitle'>
                                        <span>{this.getTitle(value.content)}</span><br/>
                                        {this.getSubTitle(value.content)}
                                    </p>
                                </div>
                            }
                            {
                                !this.getImg(value.content)&&
                                <div className='title'>{this.getTitle(value.content)}</div>
                            }
                            </div>
                            
                    }).filter((ele,index)=>index>1)
                }
                <div className='block'></div>
            </div>
        );
    }
    componentDidMount() {
        getHomeData().done(res => {
            const entrance = res.floors[1].list
            const list = res.floors
            this.setState({
                entrance,
                list,
                status:true
            })
            // console.log(list)
        })
    }
}

export default List;