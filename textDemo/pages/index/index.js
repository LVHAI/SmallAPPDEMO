//index.js
//获取应用实例
var initData="this is first line\nthis is second line"
Page({
  data: {
    text:initData
  },

  extraLine:[],

  add:function(e){
      console.log("add")
      this.extraLine.push('other Line')
      this.setData({
        text:initData + '\n' + this.extraLine.join('\n')
      })
  },

  remove:function(e){
      console.log("remove")
      if(this.extraLine.length >0){
        this.extraLine.pop()
        this.setData({
          text:initData + '\n' + this.extraLine.join('\n')
        })
      }
  }

})
