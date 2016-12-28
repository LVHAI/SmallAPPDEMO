var HTTPsTools = require('../../datas/httpsTools.js');

Page({
<<<<<<< HEAD:YYTDemo/pages/home/home.js
  data: {
        cloudService:[],
        healthService:[],
        hidden:false
  },
=======
    hospitalList:[],
    data: {
            cloudService:[],
            cloudServiceH:0,
            healthService:[],
            hospitalList:[],
            hospitalList3:[],
            hasRefresh:false,
            hasMore:false,
            pageNum:10,
            pageSize:1,
            appHealthInfomationResponseList:[],
    },
>>>>>>> 8505cd8c34e96e1e7c0f59b2b0b3569a752d686b:testDemo/pages/home/home.js
  

    onLoad:function(){
        // console.log(screen.availWidth);
        
        wx.setNavigationBarTitle({
            title: '云医通'
        })

        console.log("list");
        list(this);
        getHospitalList({'appId':'631806341'},this)
        getBanners(null,this)
        getNewsList({'pageNum':1,'pageSize':10},this)
    },
    onShow: function(){
         var that = this;
         setTimeout(function(){
            that.setData({
                hidden: true
            });
         }, 1500);
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
    },
    gotoMoreHospital:function(){
        let url = "../Cloudhospital/Cloudhospital?hospitalList=" + this.data.hospitalList
        wx.navigateTo({url:url});
    },
    refresh: function(e) {
        console.log(e)
        this.setData({hasRefresh:true})
    },
    loadMore: function(e) {
        console.log(e)
        let pageN = this.data.pageNum
        this.setData({hasMore:true,pageNum:pageN+1})
        getNewsList({'pageNum':this.data.pageNum,'pageSize':10},this)
    },
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
// 获取医院数据
function getHospitalList(param,classThis){
    var that = classThis;
    let hospitalList3Data = []
    let params = {
        API_URL: 'http://app.yunyichina.cn/yyt/cardInfo/hospitalList',
        data:param,
        // method:'POST',
    }
    HTTPsTools.result(params).then(datas => {
        let message = datas.data.message
        for(let index = 0;index < message.length;index ++){
            if(index < 3){
                hospitalList3Data[index] =  message[index]
            }
        }
        that.setData({
            hospitalList:message,
            hospitalList3:hospitalList3Data
        })
        that.hospitalList = message
    }).catch(e => {

    });
}
// yyt/config/banner
// 获取医院数据
function getBanners(param,classThis){
    var that = classThis;
    let hospitalList3Data = []
    let params = {
        API_URL: 'http://app.yunyichina.cn/yyt/config/banner',
        data:param,
        // method:'POST',
    }
    HTTPsTools.result(params).then(datas => {
        console.log(datas.data.message)
        let message = datas.data.message
        that.setData({
            banners:message
        })
    }).catch(e => {

    });
}

// 获取健康咨询列表数据
function getNewsList(param,classThis){
    
    var that = classThis;
    let hospitalList3Data = []
    let params = {
        API_URL: 'http://app.yunyichina.cn/yyt/appHeatlhInformation/list',
        data:param,
        // method:'POST',
    }
    HTTPsTools.result(params).then(datas => {
        console.log(datas)
        let message = datas.data.message
        let appHealthInfomationResponseList = that.data.appHealthInfomationResponseList
        let count = that.data.appHealthInfomationResponseList.length

        for(let index = 0;index < message.appHealthInfomationResponseList.length;index ++){
            appHealthInfomationResponseList[index + count] =  message.appHealthInfomationResponseList[index]
        }
        that.setData({
            appHealthInfomationResponseList:appHealthInfomationResponseList,
            hasMore:false

        })
    }).catch(e => {

    });
}

