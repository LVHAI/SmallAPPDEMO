//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    disable:true
  },

  passwordChange:function(e){
    console.log(e.detail.value)
  },

  btn:function(e){
    console.log(this.data.disable)
    this.setData({
      disable:!this.data.disable
    })
  },
  bindchange:function(e){
    console.log(e.detail.value)
  },

  bindinput:function(e){
    console.log(e.detail.value)
    // return "1234567890";
  },

  bindfocus:function(e){
    console.log(e.detail.value)
  }
})
