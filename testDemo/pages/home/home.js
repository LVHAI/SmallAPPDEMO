Page({
  data: {
        cloudService:[],
        healthService:[]
  },
  

    onLoad:function(){
        // console.log(screen.availWidth);
        console.log("list");
        list(this);
    },
    widgetsToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
            console.log(id)
        for (var i = 0, len = list.length; i < len; ++i) {
            console.log("1")
            if (list[i].id == id) {
                list[i].open = !list[i].open;
            } else {
                list[i].open = false;
            }
        }
            console.log("2")
        this.setData({
            list: list
        });
            console.log("3")
    },
    sessionToggle:function(e){
        var id = e.currentTarget.id
        console.log(id)
    },
    gotoHealthService:function(){
        wx.navigateTo({url:"pages/healthService/healthService"});
    }

})

function list(e){
    var that = e
    console.log(that)
    wx.request({
    url: 'http://app.yunyichina.cn/yyt/appFunction/list',
    
    method:'POST',
    success: function(res) {
        var data = res.data;
        if(data.status == "OK"){
            var message = data.message
            var cloudService1 = message.cloudService
            var healthService1 = message.healthService
            console.log(cloudService1)
            console.log(healthService1)
            that.setData({
                cloudService : cloudService1,
                healthService : [healthService1[0],healthService1[1]]
            })
        }
        console.log(that.data.healthService)
        console.log(that.data.cloudService)
    }
    });
}
