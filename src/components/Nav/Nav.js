import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './style.css'

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      path:'/home'
    }
    this.getPath = this.getPath.bind(this)
  }
  getPath(){
    this.setState({
      path:window.location.pathname
    })
  }
    render() {
        return (
            <div className="nav">
            <ul>
              <li onClick={this.getPath} className={this.state.path === '/home' | this.state.path === '/'&&'active'}>
                <Link to="/home">
                  <div>
                    <img src="//mpic.secooimg.com/images/2017/08/01/1.png" alt='' />
                  </div>首页
                </Link>
              </li>
              <li onClick={this.getPath} className={this.state.path === '/best'&&'active'}>
                <Link to="/best">
                  <div>
                    <img src="//mpic.secooimg.com/images/2017/08/01/2.png" alt=''/>
                  </div>尖货
                </Link>
              </li>
              <li onClick={this.getPath} className={this.state.path === '/category'&&'active'}>
                <Link to="/category">
                  <div>
                    <img src="//mpic.secooimg.com/images/2017/08/01/3.png" alt=''/>
                  </div>分类
                </Link>
              </li>
              <li onClick={this.getPath} className={this.state.path === '/carwrapper'&&'active'}>
                <Link to="/carwrapper">
                  <div>
                    <img src="//mpic.secooimg.com/images/2017/08/01/4.png" alt=''/>
                  </div>购物袋
                </Link>
              </li>
              <li onClick={this.getPath} className={this.state.path === '/login'&&'active'}>
                <Link to="/login">
                  <div>
                    <img src="//mpic.secooimg.com/images/2017/08/01/5.png" alt=''/>
                  </div>我的
                </Link>
              </li>
            </ul>
          </div>
        );
    }
    componentDidMount() {
        this.setState({
          path:window.location.pathname
        })
    }
}

export default Nav;