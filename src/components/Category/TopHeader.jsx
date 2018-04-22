import React, { Component } from 'react';
import './style.css'
import {Link} from "react-router-dom";

class TopHeader extends Component {
    constructor(props){
        super(props)
        this.toCategory = this.toCategory.bind(this)
        this.toBrand = this.toBrand.bind(this)
    }

    toCategory(){
        this.props.onTab('category')
    }
    toBrand(){
        this.props.onTab('brand')        
    }
    render() {
        return (
            //  onClick={this.props.history.goBack}
            <div className='categoryHeader'>
                <div className='go-back' onClick={this.props.data.history.goBack}>
                    <img src="http://mpic.secooimg.com/zhuanti_pic/back@3x_go.png" alt=''/>
                </div>
                <nav className='header-btn'>
                    <ul>
                        <li  onClick={this.toCategory} className={this.props.current==='category'&&'current'}>{this.props.btnL}</li>
                        <li  onClick={this.toBrand} className={this.props.current==='brand'&&'current'}>{this.props.btnR}</li>
                    </ul>
                </nav>
                <Link to='/home' className='go-home'>
                    <img src="http://mpic.secooimg.com/zhuanti_pic/index@3x1.png" alt=''/>
                </Link>
            </div>
        );
    }
}

export default TopHeader;