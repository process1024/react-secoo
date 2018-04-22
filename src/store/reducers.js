import { combineReducers } from 'redux'
import {USER_LOGIN,USER_LOGOUT,STORE_ADD,STORE_RM} from './actions'

var name = localStorage.getItem('name')
var obj 
if (name) {
    obj = {
        name
    }
}else{
    obj = {}
}

function userInfo(state=obj,action){
    switch(action.type){
        case USER_LOGIN:
            return state = action.data
        case USER_LOGOUT:
            return state = {}
        default:
            return state
    }
}

let listInfo = localStorage.getItem('itemInfo')
let list =[];
if (listInfo) {
    list = JSON.parse(listInfo)
}

function storeInfo(store=list,action){
    switch(action.type){
        case STORE_ADD:
            return action.data
        case STORE_RM:
            return store = list.filter(item => {
                if (item.id !== action.data.id) {
                    return item
                }
            })
        default:
            return store
    }
}


export default combineReducers({userInfo,storeInfo})
