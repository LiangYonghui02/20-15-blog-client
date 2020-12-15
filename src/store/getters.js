export default {
  userInfo: state => state.userInfo,
  token: state => state.token,
  userId: state => state.userId,
  userOnLine: state => state.userOnLine,
  
  
  getArticles: state => state.articles,
  
  getComments: state => state.comments,
  
  getHomeEssays: state => state.homeEssays,
  
  getBaseInfo: state => state.baseInfo,
  
  getMessageCount: state => state.messageCount,

};
