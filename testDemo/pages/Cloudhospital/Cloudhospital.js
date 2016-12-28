var HTTPsTools = require('../../datas/httpsTools.js');

Page({
  data:{
    // text:"这是一个页面"
    hospitalList:[]
  },
  onLoad:function(options){
      
        wx.setNavigationBarTitle({
            title: '云医通'
        })
    console.log(options.hospitalList)
    let hospitalList = hospitalList
    getHospitalList({'appId':'631806341'},this)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

// 获取医院数据
function getHospitalList(param,classThis){
    var that = classThis;
    let params = {
        API_URL: 'http://app.yunyichina.cn/yyt/cardInfo/hospitalList',
        data:param,
        // method:'POST',
    }
    HTTPsTools.result(params).then(datas => {
        let message = datas.data.message
        that.setData({
            hospitalList:message
        })
    }).catch(e => {

    });
}