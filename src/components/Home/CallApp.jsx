import React, { Component } from 'react';

class CallApp extends Component {
    render() {
        return (
            <div id='newUserCallApp'>
                <img src="//mpic.secooimg.com/images/2017/07/21/logo.png" alt=''/>
                <h2>{this.props.title}</h2>
                <p>{this.props.active}</p>
                <div className='downloadNow'>
                    立即打开
                </div>
            </div>
        );
    }
}

export default CallApp;