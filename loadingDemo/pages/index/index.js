Page({
    data: {
        hidden: true,
        title:"",
    },
    loadingTap: function(){
        this.setData({
          hidden: false
        });
        var that = this;
        setTimeout(function(){
          that.setData({
              hidden: true
          });
          that.update();
        }, 3000);


    wx.request({
      url:"http://test.yunyichina.cn:9090/yyt/appFunction/newlist",
      method:"POST",
      success:function(res){
        var data = res.data;
        var status = data.status
        var message = data.message[0]
        console.log(message);
        that.setData({
            title:message.title
        })
        console.log(data);
      }
    });
    },
})
