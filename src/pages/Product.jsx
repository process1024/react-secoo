import React, { Component } from 'react';
import {getProductData} from '../ajax/Product'
import '../static/product.css'
// import ReactSwipe from 'react-swipe'
import {connect} from 'react-redux'
import $ from 'jquery'
import {ADD} from '../store/actions'
// import {Link} from 'react-router-dom'

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:''
        }
        this.gohome = this.gohome.bind(this)
        this.addStore = this.addStore.bind(this)
        this.changeSize = this.changeSize.bind(this)
    }
    gohome(){
        this.props.history.push('/home')
    }

    addStore(){
        console.log(this.props.state.userInfo)

        if (localStorage.getItem('name')) {
            var id = this.props.match.params.id
            var isSize = $('.size-ul').find('.active').text()
            var size 
            if (isSize) {
                size = isSize
            }else{
                size = ''
            }
            if (localStorage.getItem('itemInfo')) {
                // let v = localStorage.getItem('itemInfo')
                let i = localStorage.getItem('itemInfo').indexOf('{')
                let e = localStorage.getItem('itemInfo').lastIndexOf('}')+1
                let ori = localStorage.getItem('itemInfo').slice(i,e)
                let oriStr = '['.concat(ori,']')
                let oriArr = JSON.parse(oriStr)
                // this.props.state.storeInfo
                console.log(oriArr)
                var tr=true;
                for(let index = 0; index < oriArr.length; index++) {
                    // console.log(oriArr[index].id)
                    if (oriArr[index].id === id) {
                        alert('已经在购物车啦')
                        tr=false
                        return
                    }

                        // return
                   
                }
                
                if(tr){
                    let additem = `{"id":"${id}","size":"${size}"}`
                localStorage.setItem('itemInfo',`[${additem},${ori}]`)
                alert('添加购物车成功')
                console.log(localStorage.getItem('itemInfo'))
                var item = localStorage.getItem('itemInfo')
                this.props.dispatch(ADD(item))
               }
                // console.log(oriArr)
                // let additem = `{id:${id},size:${size}}`
                // localStorage.setItem('itemInfo',`[${additem},${ori}]`)
                // console.log(localStorage.getItem('itemInfo'))
            }else{
                alert('添加购物车成功')
                var item = `[{"id":"${id}","size":"${size}"}]`
                localStorage.setItem('itemInfo',item)
                console.log(localStorage.getItem('itemInfo'))
            }
        }else{
            alert('请先登陆好吗！')
            window.location.href = '/login'
        }

    }

    changeSize(e){
        var id = e.target.id
        $(`#${id}`).addClass('active').siblings().removeClass('active')
    }

    toCar(){
        window.location.href='/carwrapper'
    }
    render() {
        return (
            <div>
                {this.state.data&& <div className='product'>
                    <header className='blank-header'>
                        <div className='go-back' onClick={this.props.history.goBack}>
                            <img src="http://mpic.secooimg.com/zhuanti_pic/back@3x_go.png" alt=''/>
                        </div>
                        <div className='header-right'>
                            <i style={{color:'#333'}} onClick={this.toCar} className="fa fa-lock"></i>
                            <i onClick={this.gohome} className="fa fa-home"></i>
                        </div>
                    </header>
                    <div className='swipe-pic'><img src={this.state.image1} alt=""/>
                    </div>
                    <div className='pro-detail'>
                        <p className='pro-name'>
                            {this.state.data.productName}
                        </p>
                        <p className='pro_pric'><b>¥{this.state.data.refPrice}</b></p>
                    </div>
                    {this.state.data.productSpec.颜色&&<div className='pro-size'>
                        <p>颜色</p>
                        <ul>
                                {this.state.data.productSpec.颜色.map((value,index)=>{
                                return <li key={index} className='img-li'>
                                    <img key={index} src={`http://pic.secoo.com/product/500/500/${JSON.parse(value.imgUrl)[1]}`} alt=""/>
                                    </li>
                            })}
                        </ul>
                    </div>
                    }
                    {this.state.data.productSpec.鞋尺码&&<div className='pro-size'>
                        <p>尺码</p>
                        <ul onChange={this.choseSize} className='size-ul'>
                                {this.state.data.productSpec.鞋尺码.map((value,index)=>{
                                return <li onClick={this.changeSize} id={`size${index}`} key={index} className={index===0&&'active'}>{value.specvalue}</li>
                            })}
                        </ul>
                    </div>
                    }
                    <div onClick={this.addStore} className='add-btn'>加入购物袋</div>
                    </div>}
                    <div className='block'></div>
            </div>
        );
    }

    componentDidMount() {
        let t = new Date().getTime()
        let id = this.props.match.params.id
        getProductData(t,id).done(res=>{
            let img =  JSON.parse(res.rp_result.good.showPicture)
            var img1
            for (var k in img) {
                if (k ==1) {
                 img1 =img[k]
                }
            }
            let image1 = `http://pic.secoo.com/product/500/500/${img1}`
            this.setState({
                data:res.rp_result.good,
                image1
            })
            console.log(res.rp_result.good)
        })
    }
}

function select(state){
    console.log(state)
    return {
        state
    }
}

export default connect(select)(Product);
// http://pic.secoo.com/product/500/500/10/51/d33301aabc2f4235a253665eb9671de5.jpg