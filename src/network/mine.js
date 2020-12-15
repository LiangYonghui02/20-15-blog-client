import {request} from './request';
import da from "element-ui/src/locale/lang/da";
// 请求个人主页的文章列表
export function mineArticle(id) {
    return request({
        method: 'get',
        url: "/mine/mine_article/" + id,
    }).catch(err => err);
}

export function otherArticle(data) {
    return request({
        method: 'get',
        url: "/mine/other_article/1315185929236901889",
    }).catch(err => err);
}

// 根据id获取基本信息
export function baseInfo(id) {
    return request({
        method: 'get',
        url: "mine/base_info/" + id,
    }).catch(err => err);
}



// 关注
export function follow(data) {
    return request({
        method: 'post',
        url: "follow/follow",
        data: data
    }).catch(err => err);
}

// 取消关注
export function unfollow(data) {
    return request({
        method: 'post',
        url: "follow/unfollow",
        data: data
    }).catch(err => err);
}

// 是否关注
export function hasfollow(data) {
    return request({
        method: 'post',
        url: "follow/has_follow",
        data: data
    }).catch(err => err);
}




// 获取用户收藏的文章
export function getUserCollectArticles(id) {
    return request({
        method: 'get',
        url: "mine/get_collect_articles/"+id,
    }).catch(err => err);
}



// 获取用户关注的人的信息
export function getUserFollowUsers(id) {
    return request({
        method: 'get',
        url: "mine/get_follow_users/"+id,
    }).catch(err => err);
}