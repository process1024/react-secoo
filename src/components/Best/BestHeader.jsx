import React, { Component } from 'react';
import ReactSwipe from 'react-swipe'
import {getBestHeader} from '../../ajax/Best'
import './style.css'

class BestHeader extends Component {
    constructor(props){
        super(props)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            index:0,
            status:false
        }
        this.selectList = this.selectList.bind(this)
    }

    selectList(event){
        var s = event.target.dataset.index
        this.props.change(s)
        console.log(this.props.index)
    }

    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
        }.bind(this)}
        return (
            <div id='bestHeader'>
                <div className='header'>
                {
                    this.state.status&&<ReactSwipe swipeOptions={opt}>
                        {
                            this.state.data.banners.map((value,index)=>{
                                return <div key={index} className='header-box'>
                                    <img src={value.img} alt="" />
                                </div>
                            })
                        }
                    </ReactSwipe>
                }
                <div className="index-container">
                    {this.state.status&&<ul>
                         {
                        this.state.data.banners.map((value,index)=>{
                            return  <li key={index} className={this.state.index === index? "selected": ''}></li>
                        })
                        }
                    </ul>
                    }
                </div>
                </div>

                <div className='tags clearfix'>
                {this.state.status&&<ul className='tags-ul'>
                    {
                   this.state.data.tags.map((value,index)=>{
                       return  <li onClick={this.selectList} className='tags-li' id={index===0&&'selected'} key={index}>
                       <div className={this.props.selected === value.title &&'select'}>
                           <img  data-index={value.title} src={value.img} alt="" />
                       </div>
                       <span data-index={value.title} className='tag-title'>{value.title}</span></li>
                    })
                   }
               </ul>
               }
                </div>
            </div>
        );
    }
    componentDidMount() {
        var t = new Date().getTime()
        getBestHeader(t).done(res=>{
            // console.log(res)
            this.setState({
                data:res,
                status:true
            })
            // console.log(this.props.select)
        })
    }
}

export default BestHeader;