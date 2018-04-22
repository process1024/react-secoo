import React, { Component } from 'react';
import {getCommentData} from '../ajax/Comment'
import '../static/comment.css'
import {Link} from 'react-router-dom'

class CommentShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:''
        }
    }
    render() {
        return (
            <div className='comment'>
                <header className='comment-header blank-header'>
                    <div className='go-back' onClick={this.props.history.goBack}>
                        <img src="http://mpic.secooimg.com/zhuanti_pic/back@3x_go.png" alt='' />
                    </div>
                    <div className='car-title'>晒货详情</div>
                </header>
                {this.state.data&& <section>
                    <div className='userInfo'>
                        <img src={this.state.data.headImg} alt=""/>
                        <div>
                            <p>{this.state.data.nickName}</p>
                            <p>{this.state.data.createDate}</p>
                        </div>
                    </div>
                    {this.state.data.imgs.map((value,index)=>{
                        return <img className='bgImg' src={value} alt=""/>
                    })}
                    
                    <div className='pro-des'>
                        {this.state.data.content}
                    </div>
                    <div className='mixin-show'>
                        <i className="fa fa-thumbs-o-up"></i> &nbsp;
                        {this.state.data.praiseCount} &emsp;
                        <i className="fa fa-heart"></i> &nbsp;
                        {this.state.data.favoriteCount}
                    </div>
                    <div className='total-comment'>
                        全部评论({this.state.data.favoriteCount})
                    </div>
                    <div className='block'></div>
                    <div className='to-pro'>
                        {this.state.data.productInfo.map((value,index)=>{
                            return <div>
                                <img src={value.productImg} alt=""/>
                                <div className='pro-title'>{value.productName}</div>
                                <div className='pro-price'>¥{value.secooPrice}</div>
                            </div> 
                        })}
                        {/* {this.state.data.productInfo.productName} */}
                        <Link to={`/product/${this.state.data.productId}`} className='buy-btn'>去购买</Link>
                    </div>
                    
                    </section> }
                    
            </div>
        );
    }
    componentWillMount() {
        let id = this.props.match.params.id
        let t = new Date().getTime()
        getCommentData(t,id).done(res=>{
            this.setState({
                data:res.show
            })
            // console.log(res.show)
        })
        // console.log(this.props.match.params.id)
    }
}

export default CommentShow;