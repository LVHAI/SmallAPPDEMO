//index.js
//获取应用实例
var app = getApp()
Page({
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.checkbox)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})
