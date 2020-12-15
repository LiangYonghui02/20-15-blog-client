import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);

const state = {
  // 用户信息
  userInfo: {},
  // 用户id
  userId: '',
  // token凭证
  token: '',
  userOnLine: false,
  
  baseInfo: {},
  
  
  
  articles:[],
  
  
  comments:[],
  
  homeEssays:[],
  
  messageCount: 4
 
  
  
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  // 异步操作或者复杂的操作放到actions
  actions,
  plugins: [createPersistedState({
    reducer(val) {
      return {
        userInfo: val.userInfo,
        userId: val.userId,
        token: val.token,
        userOnLine:val.userOnLine,
        comments:val.comments,
        articles: val.articles,
        homeEssays:val.homeEssays,
        baseInfo:val.baseInfo,
        messageCount: val.messageCount
      }
    }
  })]
});
