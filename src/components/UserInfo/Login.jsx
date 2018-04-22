import React, { Component } from 'react';
import './style.css'
import {connect} from 'react-redux'
import {LOGIN} from '../../store/actions'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            pwd:''
        }
        this.inputName = this.inputName.bind(this)
        this.login = this.login.bind(this)
    }

    inputName(e){
        var value = e.target.value
            this.setState({
                name:value
            })
    }

    login(){
        console.log(this.state.name)
        let info = {
            name:this.state.name
        }
        if (info ) {
            localStorage.setItem('name',this.state.name);
            alert('登录成功')
            this.props.dispatch(LOGIN(info))
        }
        
    }

    render() {
        return (
            <div>
                <header className='header-inner'>
                    <div className='go-back' onClick={this.props.goback}>
                        <img src="http://mpic.secooimg.com/zhuanti_pic/back@3x_go.png" alt=''/>
                    </div>
                    <div className='center-title'>登录</div>
                    <div className='register'>快速注册</div>
                </header>
                <div className='form-container'>
                    <div className='login-logo'><img src="//mpic.secooimg.com/images/2017/05/18/login_uri.png" alt=""/></div>
                    <div className='login-account'><input type="text" required  pattern="^[\u4e00-\u9fa5]{2,4}$" onChange={this.inputName} placeholder='手机号/账号' required/></div>
                    <div className='login-password'><input type="password" placeholder='密码' required/></div>
                    {/* <div className='login-verifyCode'>
                        <input id="code_input" type="text" placeholder='图形验证码'/>
                        <div id="v_container" style={{width:'100px',height:'50px'}}></div>
                    </div> */}
                    <button onClick={this.login} id='code_input' className='login-btn'>登录</button>
                </div>
            </div>
        );
    }
    componentWillMount() {
    }
}

function select(state){
    console.log(state)
    return {
        state
    }
}

export default connect(select)(Login);
