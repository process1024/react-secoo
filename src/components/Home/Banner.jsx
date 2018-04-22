import React, { Component } from 'react';
import ReactSwipe from 'react-swipe'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getHomeData} from '../../ajax/Home.js'
import './style.css'

class Banner extends Component {
    constructor(props){
        super(props)
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            index : 0,
            status:false
        }
    }

            

    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
        }.bind(this)}
        return (
            <div id="home-category">
                {this.state.status&&<ReactSwipe swipeOptions={opt} style={{width:'100%'}}>
                    {
                        this.state.data.map((value,index)=>{
                            return <div key={index} style={{zIndex:index+1}} className="carousel-item">
                                <a ><img src={value.img} alt="这是个图片"/></a>
                            </div>
                        })
                    }
                </ReactSwipe>}
                {this.state.status&&
                <div className="index-container">
                    <ul>
                         {
                        this.state.data.map((value,index)=>{
                            return  <li key={index} className={this.state.index === index? "selected": ''}></li>
                        })
                         }
                    </ul>
                </div>
                }
            </div>
        );
    }
    componentDidMount() {
        getHomeData().done(res => {
            const data = res.floors[0].list
            this.setState({
                data,
                status:true
            })
        })
    }
}

export default Banner;