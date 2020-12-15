import {
    SET_TOKEN,
    SET_USER_ID,
    SET_USER_INFO,
    DEL_TOKEN, LOGOUT,
    SET_ARTICLES,
    SET_COMMENTS,
    SET_HOME_ESSAYS,
    SET_BASE_INFO,
    SET_MESSAGE_COUNT,
    SET_AVATAR_URL,
    DEL_ALL
} from "./types";
import fa from "element-ui/src/locale/lang/fa";


export default {
    // 设置token
    [SET_TOKEN](state, token) {
        state.token = token;
        state.userOnLine = true
        localStorage.setItem("token", token);
        // localStorage.setItem("userOnLine",true)
    },
    // 设置用户信息
    [SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
    // 设置用户id
    [SET_USER_ID](state, userId) {
        state.userId = userId;
    },
    // 删除token
    [DEL_TOKEN](state) {
        state.userOnLine = false;
        // localStorage.setItem("userOnLine",false)
    },
    [LOGOUT](state) {
        state.userInfo = {};
        state.userOnLine = false;
        state.token = '';
        state.userId = '';
    },
    [SET_ARTICLES](state, data) {
        state.articles = data.articles;
    },
    [SET_COMMENTS](state, data) {
        state.comments = data;
    },
    
    [SET_BASE_INFO](state, data) {
        state.baseInfo = data;
    },
    
    [SET_MESSAGE_COUNT](state, data) {
        state.messageCount = data
    },
    
    [SET_HOME_ESSAYS](state, data) {
        state.homeEssays = data
    },
    
    [SET_AVATAR_URL](state, data) {
        state.userInfo.avatarUrl = data
    },
    
    [DEL_ALL](state) {
        state.userId = '';
        state.baseInfo = null;
        state.userInfo = null;
        state.homeEssays = [];
        state.articles = [];
        state.token = '';
        state.userOnLine = false;
        state.messageCount = 0;
        state.comments = []
        localStorage.removeItem("token");
    }
}
