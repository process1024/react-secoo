
import $ from 'jquery'

export function getCategoryData() {
    
    let url = `http://android.secoo.com/appservice/cartAndBrand.action?v=2.0&_=1503476293052&callback=?`
    const result =  $.getJSON(url)
    return result 
}




export function getBrand() {
    
    let url = `http://android.secoo.com/appservice/all_brand.action?_=1503489132659&callback=?`
    const result =  $.getJSON(url)
    return result 
}