var Api = {

    fetchApi : function(params) {
        var that = this;
        return new Promise((resolve,reject) => {
            wx.request({
              url: params.API_URL,
              data:Object.assign({}, params.data),
              header: {
                'Content-Type': 'application/json'
              },
              method:params.method,
              success: resolve,
              fail: reject 
            })
        })
    },
    result : function (params) {
        var that = this;
        return that.fetchApi(params).then( res => res)
    }
}
module.exports = Api;
