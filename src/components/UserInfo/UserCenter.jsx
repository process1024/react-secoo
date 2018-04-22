import React, { Component } from 'react';

import {connect} from 'react-redux'
import {LOGOUT} from '../../store/actions'

class UserCenter extends Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout(){
        var boo = window.confirm('确定注销吗')
        if (boo) {
            localStorage.removeItem('name')
            this.props.dispatch(LOGOUT())
        }
    }

    render() {
        return (
            <div>
                <header className='header-inner'>
                    <div className='go-back' onClick={this.props.goback}>
                        <img src="http://mpic.secooimg.com/zhuanti_pic/back@3x_go.png" alt=''/>
                        &nbsp;返回
                    </div>
                    <div className='center-title'>我的寺库</div>
                    <div className='register' onClick={this.logout} style={{fontSize:'.586667rem',textAlign:'right'}}><i className="fa fa-power-off"></i></div>
                </header>
                <section>
                    <div className='user-list'>
                        <div>
                            <span><i className="fa em-pic fa-user-circle"></i></span>
                            <p>
                                <span>账号</span>
                                <span className='phone'>{localStorage.getItem('name')}  <i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                        <div>
                            <span><i className="fa em-pic fa-book"></i></span>
                            <p>
                                <span>订单</span>
                                <span><i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                        <div>
                            <span><i className="fa em-pic fa-money"></i></span>
                            <p className='no-bottom'>
                                <span>红包、优惠卷</span>
                                <span><i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                    </div>
                    <div className='user-list'>
                        <div>
                            <span><i className="fa em-pic fa-cc-discover"></i></span>
                            <p>
                                <span>我的竞拍</span>
                                <span><i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                        <div>
                            <span><i className="fa em-pic fa-paypal"></i></span>
                            <p className='no-bottom'>
                                <span>我的拍卖卷</span>
                                <span><i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                    </div>
                    <div className='user-list'>
                        <div><span><i className="fa em-pic fa-sitemap"></i></span>
                            <p>
                                <span>关于寺库</span>
                                <span><i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                        <div><span><i className="fa em-pic fa-phone"></i></span>
                            <p>
                                <span>客服热线</span>
                                <span>400 875 6789 <i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                        <div><span><i className="fa em-pic fa-hotel"></i></span>
                            <p className='no-bottom'>
                                <span>海外站购买说明</span>
                                <span><i className="fa fa-chevron-right"></i>&emsp;</span>
                            </p>
                        </div>
                    </div>
                    <footer>
                        <ul>
                            <li>首页</li>
                            <li>品牌</li>
                            <li>购物袋</li>
                            <li>我的寺库</li>
                        </ul>
                        <div>
                            北京寺库商贸有限公司 联系电话：400 875 6789 <br/>
                        地址：北京市东城区朝阳门内大街银河SOHO C座15层
                        </div>
                    </footer>
                </section>
            </div>
        );
    }
    componentDidMount() {
        // console.log(localStorage.getItem('name'))
        // console.log(this.props.state.userInfo.name)
    }
}

function select(state){
    return {
        state
    }
}

export default connect(select)(UserCenter);