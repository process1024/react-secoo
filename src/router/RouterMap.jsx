import React, { Component } from "react";
import Home from "../pages/Home";
import Best from "../pages/Best";
import Category from "../pages/Category";
import CarWrapper from "../pages/CarWrapper.jsx";
import UserInfo from "../pages/UserInfo";
// import Login from "./components/UserInfo/Login";
// import UserCenter from "./components/UserInfo/UserCenter";


import CommentShow from "../pages/CommentShow";
import Product from "../pages/Product";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import "./App.css";
// import {LOGIN,LOGOUT} from './store/actions'
// import {connect} from 'react-redux'


class RouterMap extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       path:'/home'
//     }
//     this.getPath = this.getPath.bind(this)
//   }
//   getPath(){
//     this.setState({
//       path:window.location.pathname
//     })
//   }

  render() {
    return (
      <Router>
        <div className="App">
         
          <Redirect to={{pathname:this.props.basename,state:{from:'/'}}}></Redirect>
          <Route path='/home' component={Home}></Route>
          <Route path='/best' component={Best}></Route>
          <Route path='/category' component={Category}></Route>
          <Route path='/carwrapper' component={CarWrapper}></Route>
          <Route path='/login' component={UserInfo}></Route>
          {/* {!this.props.userInfo&& <Route path='/login' component={Login}></Route> } */}
          {/* {this.props.userInfo&& <Route path='/login' component={UserCenter}></Route> } */}
          <Route path='/comment/:id' component={CommentShow}></Route>
          <Route path='/Product/:id' component={Product}></Route>
        </div>
      </Router>
    );
  }
  componentDidMount() {
    console.log(this)
  }
}



export default RouterMap;
