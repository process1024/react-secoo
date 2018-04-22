import React, { Component } from 'react';
import BestHeader from '../components/Best/BestHeader'
import BestList from '../components/Best/BestList'
import {getBestList} from '../ajax/Best'
// import CommentShow from "./CommentShow";
// import {Route} from "react-router-dom";

class Best extends Component {
    constructor(props){
        super(props)
        this.state = {
            select:'最新',
            index:7,
            list:'',
            status:false
        }
        this.receive = this.receive.bind(this)
        this.getListData = this.getListData.bind(this)
    }
    receive(data){
        this.setState({
            select:data
        })
        switch (data) {
            case '最新':
                return this.getListData(1)
            case '时髦':
                return this.getListData(5)
            case '型男':
                return this.getListData(8)
            case '女士':
                return this.getListData(15)
            case '生活':
                return this.getListData(6)
            case '美妆':
                return this.getListData(9)
            case '健康':
                return this.getListData(7)
            default:
                return 15
        }
        
    }

    render() {
        return (
            <div>
                <BestHeader change={this.receive} index={this.state.index} selected={this.state.select}/>
                <BestList list={this.state.list} status={this.state.status}/>
                {/* <Route path='/comment/:id' component={CommentShow}></Route> */}

            </div>
        );
    }

    getListData(id){
        var t = new Date().getTime()
        getBestList(t,id).done(res=>{
            this.setState({
                list:res.list,
                status:true
            })
        console.log(res)
        })
        // console.log(id)
    }

    componentDidMount() {
        this.getListData(1)
    }
}

export default Best;
