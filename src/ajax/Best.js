import $ from 'jquery'



export function getBestHeader(t) {
    let url = `http://las.secoo.com/api/show/hot_show_head?c_upk=&c_app_ver=1.0&c_channel=&c_device_id=&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=375&c_screen_height=667&_=${t}&callback=?`
    const result = $.getJSON(url)
    return result
}



export function getBestList(t,id) {
    let url = `http://las.secoo.com/api/show/hot_show_list?lineNumber=1&tagId=${id}&size=20&c_upk=&c_app_ver=1.0&c_channel=&c_device_id=&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=375&c_screen_height=667&_=${t}&callback=?`
    const result = $.getJSON(url)
    return result
}