import React, { Component } from 'react';
import Login from '../components/UserInfo/Login'
import UserCenter from '../components/UserInfo/UserCenter'
import Nav from '../components/Nav/Nav'
// import {LOGIN,LOGOUT} from './store/actions'
import {connect} from 'react-redux'

class UserInfo extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                {!this.props.state.userInfo.name&&<Login goback={this.props.history.goBack}></Login>}
                {this.props.state.userInfo.name&&<UserCenter goback={this.props.history.goBack}></UserCenter>}
                
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props.state.userInfo)
    }
}


function select(state){
    console.log(state)
    return {
        state
    }
}

export default connect(select)(UserInfo);
