module.exports = {
    configureWebpack: {
        resolve:{
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    },
    
    // devServer:{
    //     proxy: "http://localhost:8000"
    // }
    
    
}
