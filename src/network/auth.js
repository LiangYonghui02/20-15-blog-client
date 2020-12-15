import {request} from './request'
export function register(user) {
    console.log(user)
    return request({
        method: 'post',
        url: "/user/register",
        data: user
       
    }).catch(err => err);
}


export function getVerCode(email) {
    return request({
        url: "/user/ver_code",
        params: { email }
    }).catch(err => err);
}

export function userLogin(data) {
    return request({
        method: 'post',
        url: "/user/login",
        data: data
    }).catch(err => err);
}

export function getUnReadMessageCount() {
    return request({
        method: 'get',
        url: "/message/count",
    }).catch(err => err);
}


export function getLikeOrCollectMessage() {
    return request({
        method: 'get',
        url: "/message/like_and_collect",
    }).catch(err => err);
}


export function setAlreadyRead(data) {
    console.log(data)
    return request({
        method: 'post',
        url: "/message/read",
        data: data
    }).catch(err => err);
}

export function getCommentAndReply() {
    return request({
        method: 'get',
        url: "/message/comment_and_reply",
    }).catch(err => err);
}

// 获取关注的信息
export function getFollow() {
    return request({
        method: 'get',
        url: "/message/get_follow",
    }).catch(err => err);
}





export function getUserSetting() {
    return request({
        method: 'get',
        url: "/user_info/get_setting",
    }).catch(err => err);
}


export function updateUserUrl(data) {
    return request({
        method: 'post',
        data: data,
        url: "/user_info/update_url",
    }).catch(err => err);
}


export function getEntityUserInfo(data) {

    return request({
        method: 'get',
        url: "/user_info/get_url/" + data,
    }).catch(err => err);
}




// 发送信息
export function sendWSMessage(data) {
    return request({
        method: 'post',
        url: "/message/send_msg",
        data: data,
    }).catch(err => err);
}

// 获取信息
export function getWSMessage(data) {
    return request({
        method: 'post',
        url: "/message/get_msg",
        data: data,
    }).catch(err => err);
}


// 获取用户每一个会话的最新消息
export function getWSLastMessage() {
    return request({
        method: 'post',
        url: "/message/select_last_msg",
    }).catch(err => err);
}












