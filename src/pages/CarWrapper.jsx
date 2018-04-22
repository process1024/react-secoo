import React, { Component } from 'react';
import Blank from '../components/CarWrapper/Blank'
// import Nav from '../components/Nav/Nav.js'
import {connect} from 'react-redux'
import '../static/car.css'
import {getProductData} from '../ajax/Product'
import $ from 'jquery'
// import {ADD} from '../store/actions'
// import {LOGIN} from '../store/actions'

class CarWrapper extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgs:[],
            prices:[],
            titles:[],
            data:[] ,
            sizes:'',
            status:false
        }
        this.getData=this.getData.bind(this)
        this.choosePay = this.choosePay.bind(this)
    }

    choosePay(e){
        let id = e.target.dataset.index
        let pri = this.state.prices
        let this_pri = e.target.dataset.pri
        console.log($(`#${id}`).prop('checked'))
        if (!$(`#${id}`).prop('checked')) {
            pri.splice(id,1)
            // $(`#${id}`).attr('checked', false)
            this.setState({
                prices:pri
            })
            console.log('11111111')
         } else {
            // $(`#${id}`).attr('checked',true);                                
            pri.splice(id,0,this_pri)
            this.setState({
                prices:pri
            })
            // console.log($(`#${id}`).prop('checked') + '22222222')
            console.log('2222')
         }
    }

    render() {
        return (
            <div>
                {/* <Nav></Nav> */}
                <Blank goback={this.props.history.goBack}></Blank>
                {this.props.state.storeInfo.length === 0 || !localStorage.getItem('name')&& <h2 style={{textAlign:'center',marginTop:'50%'}}>你的购物车空空，去逛逛吧</h2> }
                {(!(this.props.state.storeInfo.length === 0) && localStorage.getItem('name')) && <section className='car_list'>
                    <p className='discount'>
                        <span>满额减</span>
                        再买1400元，将扣减800元
                    </p>
                    {this.state.status&&<div> 
                    {this.state.data.map((value,index)=>{
                        return <div key={index} className='intemInfo'>
                            <input data-index={index}   data-pri={value.price} onChange={this.choosePay} checked='false'  type="checkbox" name="" id={value.index}/>
                            <img src={value.image1} alt="这是张图片"/>
                            <div className='item-right'>
                               <p><span className='right-title'>{value.titles}</span>
                                   <span className='price'> <span> ¥{value.price}</span></span>
                                </p>
                                <p className='count'><span> {this.state.sizes[index]} </span><span>X1</span></p>
                            </div>
                        </div>
                    })}
                    </div>
                }
                    <div className='totle-prices'><span>商品金额：</span><span>¥{eval(this.state.prices.join('+'))}</span></div>
                    <div className='insurance'> <b>100%正品保证 假一赔十</b><br />寺库承诺所有在售商品均为正品，假一赔十 </div>
                    <footer className='pay-footer'>
                        <input type="checkbox"  checked="false" />
                        <span>全选  &emsp;</span>
                        <span>合计：¥{eval(this.state.prices.join('+'))}</span>
                        <div className='to-pay'>去结算({this.state.prices.length})</div>
                    </footer>
                    <div className='block'></div>
                    </section> 
                    }
            </div>
        );
    }
    getData(){
        var storeInfo
        var idArr =[]
        var sizes = []
        if (this.props.state.storeInfo.length != 0 ) {
            storeInfo = this.props.state.storeInfo
            storeInfo.map(v=>{
                idArr.push(v.id)
                sizes.push(v.size)
            })
        }
        console.log(this.props.state)
        
        // console.log(storeInfo)
        // storeInfo.map(v=>{
        //     idArr.push(v.id)
        //     sizes.push(v.size)
        // })
        this.setState({
            sizes
        })
        // console.log(this.state.sizes)
        // console.log(localStorage.getItem('itemInfo'))
        // var item = localStorage.getItem('itemInfo')
        // this.props.dispatch(ADD(item))
        // console.log(ADD)
        console.log(this.props.state)
        console.log(idArr)
        let sort = 0
        let t = new Date().getTime()
        idArr.forEach((v,i)=>{
                getProductData(t,v).done(res=>{
                    console.time(i)
                    let img =  JSON.parse(res.rp_result.good.showPicture)
                    var img1
                    for (var k in img) {
                        if (k == 1) {
                         img1 =img[k]
                        }
                    }
                    let image1 = `http://pic.secoo.com/product/500/500/${img1}`
                    // index.push(i)
                    // let imgs = this.state.imgs
                    // imgs.push(image1)
                    let prices = this.state.prices
                    prices.push(res.rp_result.good.secooPrice)
                    // let titles = this.state.titles
                    // titles.push(res.rp_result.good.productName)
                    let obj={
                        image1,
                        price:res.rp_result.good.secooPrice,
                        titles:res.rp_result.good.productName,
                        index:i
                    }
                    this.setState({
                        data:[...this.state.data,obj]
                    },()=>{
                        var arr = this.state.data.sort((a,b)=>{
                            return a.index-b.index  
                      })
                      this.setState({
                          data:arr,
                          status:true,
                          prices
                      })
                    })
                    // this.setState({
                    //     imgs,
                    //     titles,
                    //     prices,
                    //     // index
                    // })
                    // console.timeEnd(i)
                    // console.log(this.state.sizes)
                })
            
        })
        
    }
    componentDidMount() {
        this.getData()
        
        console.log(this.props.state)
    }
}

function select(state){
    // console.log(state)
    return {
        state
    }
}

export default connect(select)(CarWrapper);