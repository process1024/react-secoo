import $ from 'jquery'

export function getHomeData() {
    
    let url = `http://las.secoo.com/api/home/home_page?c_app_ver=1.0.0&c_platform_type=3&callback=?&_=0.9269400105452794&c_upk=`
    const result =  $.getJSON(url)
    return result 
}

