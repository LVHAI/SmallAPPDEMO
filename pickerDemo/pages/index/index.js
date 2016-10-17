//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    selector:["中国","巴西","澳洲","朝鲜","古巴"],
    index:0,
    date:"2016-10-12",
    time:"14:42"
  },

  selectorChange:function(e){
    console.log(e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },

  selectorTimeChange:function(e){
    this.setData({
      time:e.detail.value
    })
  },

  selectorDateChange:function(e){
    this.setData({
      date:e.detail.value
    })
  }
})
