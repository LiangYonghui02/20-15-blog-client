import {request} from './request';
import da from "element-ui/src/locale/lang/da";
export function publish(data) {
    return request({
        method: 'post',
        url: "/article/publish",
        data: data
        
    }).catch(err => err);
}


export function essay(id) {
    return request({
        method: 'get',
        url: "article/essay/" + id,
        
    }).catch(err => err);
}


// 为文章店在哪  id 文章id
export function pollEssay(id) {
    return request({
        method: 'get',
        url: "article_poll/poll/",
        params:{
            "articleId":id,
        }
        
    }).catch(err => err);
}


// 为文章店在哪  id 文章id
export function hasPollEssay(id) {
    return request({
        method: 'get',
        url: "article_poll/has_poll/",
        params:{
            "articleId":id,
        }
        
    }).catch(err => err);
}


// 为文章店在哪  id 文章id
export function unPollEssay(id) {
    return request({
        method: 'get',
        url: "article_poll/unpoll/",
        params:{
            "articleId":id,
        }
        
    }).catch(err => err);
}


// 添加收藏
export function addCollect(data) {
    return request({
        method: 'post',
        url: "collect/add",
        data: data
    }).catch(err => err);
}


// 查看当前用户是否收藏
export function isCollect(data) {
    return request({
        method: 'post',
        url: "collect/is_collect",
        data: data
    }).catch(err => err);
}


// 查看实体的被收藏数
export function getCollectCount(id) {
    return request({
        method: 'get',
        url: "collect/get_collect_count/" + id,
    }).catch(err => err);
}



// 收藏
export function listArticles() {
    return request({
        method: 'get',
        url: "article/list_articles",
     
        
        
    }).catch(err => err);
}


// 添加阅读
export function addRead(data) {
    return request({
        method: 'post',
        url: "article/read",
        data: data
    }).catch(err => err);
}


// 查看当前用户是否阅读
export function isRead(data) {
    return request({
        method: 'post',
        url: "article/is_read",
        data: data
    }).catch(err => err);
}



// 查看文章的阅读数
export function getReadCount(id) {
    return request({
        method: 'get',
        url: "article/get_read_count/" + id,
    }).catch(err => err);
}




export function addArticlePoll(data) {
    return request({
        method: 'post',
        url: "/article_poll/poll",
        data: data
    }).catch(err => err);
}

export function isArticlePoll(data) {
    return request({
        method: 'post',
        url: "/article_poll/has_poll",
        data: data
    }).catch(err => err);
}

export function getArticlePoll(data) {
    return request({
        method: 'post',
        url: "/article_poll/get_article_poll",
        data: data
    }).catch(err => err);
}


