import React, { Component } from 'react'
import Banner from '../components/Home/Banner.jsx'
import List from '../components/Home/List.jsx'
import CallApp from '../components/Home/CallApp.jsx'
import Nav from '../components/Nav/Nav.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <Nav />
        <CallApp active='新用户注册送1000元大礼包' title='寺库' />
        <Banner />
        <List />
      </div>
    )
  }
  componentWillMount(){
  }
}

export default Home
