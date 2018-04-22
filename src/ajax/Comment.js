import $ from 'jquery'

export function getCommentData(t,id) {
    let url = `http://las.secoo.com/api/show/comment_show?commentShowDetailId=${id}&c_upk=8ade2d1f1dbe4a3a9d8d9fffa2ba2df7%7C168059214555%7Cf602c898589f4d429bd34b85876bd99d%7CAE118F3BDB1F4414DEADDCEA2428B740&c_app_ver=1.0&c_channel=&c_device_id=da931fe8-2eaa-4874-a196-7b8ef38c2af9&c_platform=&c_platform_type=&c_platform_ver=&c_screen_width=375&c_screen_height=667&_=${t}&callback=?`
    const result = $.getJSON(url)
    return result
}

