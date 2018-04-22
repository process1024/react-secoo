import React, { Component } from 'react';
import './style.css'
import {Link} from 'react-router-dom'

class Blank extends Component {
    render() {
        return (
            <div>
                <header className='blank-header'>
                    <div className='go-back' onClick={this.props.goback}>
                        <img src="http://mpic.secooimg.com/zhuanti_pic/back@3x_go.png" alt=''/>
                        返回
                    </div>
                    <div className='car-title'>购物袋</div>
                    <Link to='/home' className='go-home'>
                        <img src="http://mpic.secooimg.com/zhuanti_pic/index@3x1.png" alt=''/>
                    </Link>
                </header>
            </div>
        );
    }
    // onClick={this.props.history.goBack}
}

export default Blank;