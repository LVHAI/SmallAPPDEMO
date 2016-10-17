//index.js
//获取应用实例
Page({
  data:{
    checkboxItems:[
      {name:'USA',value:'美国'},
      {name:'CHA',value:'中国',checked:'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本', checked: 'true'},
      {name: 'ENG', value: '英国'},
      {name: 'FRA', value: '法国'},
    ],
    radioItems: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'FRA', value: '法国'},
    ],
    hidden: false
  },

  checkboxChange:function(e){
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.checkboxItems.length; i ++) {
      if (checked.indexOf(this.data.checkboxItems[i].name) !== -1) {
        changed['checkboxItems['+i+'].checked'] = true
      } else {
        changed['checkboxItems['+i+'].checked'] = false
      }
    }
    this.setData(changed)
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i ++) {
      if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
        changed['radioItems['+i+'].checked'] = true
      } else {
        changed['radioItems['+i+'].checked'] = false
      }
    }
    this.setData(changed)
  },
  tapEvent: function(e) {
    console.log('按钮被点击')
  }
})
