import {request} from './request';
import da from "element-ui/src/locale/lang/da";
export function addComment(data) {
    return request({
        method: 'post',
        url: "/comment/add",
        data: data
        
    }).catch(err => err);
}


export function getComments(id) {
    return request({
        method: 'get',
        url: "/comment/get_comments/" + id,
    }).catch(err => err);
}

export function addCommentPoll(data) {
    return request({
        method: 'post',
        url: "/comment_poll/add",
        data: data
    }).catch(err => err);
}

export function isCommentPoll(data) {
    return request({
        method: 'post',
        url: "/comment_poll/is_comment_poll",
        data: data
    }).catch(err => err);
}

export function getCommentPoll(data) {
    return request({
        method: 'post',
        url: "/comment_poll/get_comment_poll",
        data: data
    }).catch(err => err);
}






