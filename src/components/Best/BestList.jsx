import React, { Component } from 'react';
// import {getBestList} from '../../ajax/Best'
import {Link} from "react-router-dom";

class BestList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:'',
            status:false
        }
        // this.getData = this.getData.bind(this)
    }

    render() {
        return (
            <div className='comment-list'>
                {this.props.status && <div className='user-comment'>
                    {this.props.list.map((value,index)=>{
                       return <div key={index}>
                        {value.content&&
                        <div className='comment-info'>
                            <div className='user-box'>
                                <div className='user-info'>
                                    <img src={value.showUserImg} alt=""/>
                                    <div className='user-des'>
                                        <div>{value.showUserName}</div>
                                        <div className='user-time'>{value.showTime}</div>
                                    </div>
                                </div>
                                <div className='user-content'>
                                    <div>{value.content}</div>
                                    <Link to={`/comment/${value.id}`}>查看详情</Link>
                                </div>
                            </div>
                            <div className='view-show'>
                                {value.showImgs.map((v,i)=>{
                                    return <img className={value.showImgs.length>=2&&'minImg'} key={i} src={v} alt=""/>
                                })}
                            </div>
                            <div className='btn-group'>
                                <div className='btn-l'>
                                    <i className="fa fa-thumbs-o-up"></i> &nbsp;
                                    {value.praiseCount}</div>
                                <Link to={`/product/${value.productId}`} className='btn-r'>去购买</Link>
                            </div>
                        </div>
                        }
                        {!value.content&&
                        <div className='subject'>
                            <div className='subject-title'> 
                                <img src={value.titleImg} alt=""/>
                                <div className='pro-info'>
                                    <div className='pro-info-title'>{value.title}</div>
                                    <div className='pro-info-subtitle'>{value.subTitle}</div>
                                    <div className='pro-info-enter'>进入专题</div>
                                </div>
                                <div className='view-enter'>{value.showNumber}</div>
                            </div>
                            <ul className='subject-prod'>
                            {value.products.map((v,i)=>{
                                return <li key={i}>
                                        <img src={v.img} alt=""/>
                                        <div className='pro-title'>
                                            {v.name}
                                        </div>
                                        <div className='pro-price'>
                                            ¥{v.price}
                                        </div>
                                </li>
                            })}
                            </ul>
                        </div>
                        }
                        </div>    
                    })}
                    </div>
                }
                <div className='block'></div>

            </div>
        );
    }
    // getData(){
    //     var t = new Date().getTime()
    //     var n = this.props.index
    //     getBestList(t,n).done(res=>{
    //         const s = res.indexOf('{')
    //         const e = res.lastIndexOf('}')+1
    //         const data =  JSON.parse(res.slice(s,e))
    //         this.setState({
    //             data:data.list,
    //             status:true
    //         })
    //         // console.log(data)
    //         // console.log(this.state.data)
    //         // console.log(this.state.status)
    //     })
    //     console.log(n)
    // }

    componentWillMount() {
        // this.getData()
    }
}

export default BestList;