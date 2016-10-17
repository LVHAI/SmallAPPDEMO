//index.js
//获取应用实例
var types = ['default', 'primary', 'warn']

Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  setDisabled:function(e){
    this.setData({
      disabled:!this.data.disabled
    })
  },

  setPlain:function(e){
    this.setData({
      plain:!this.data.plain
    })
  },

  setLoading:function(e){
    this.setData({
      loading:!this.data.loading
    })
  },

  default:function(e){
    this.setData({
      defaultSize:this.data.defaultSize == 'default' ? 'mini' : 'default'
    })
  },

  primary:function(e){
    this.setData({
      primarySize:this.data.primarySize == 'default' ? 'mini' : 'default'
    })
  },

  warn:function(e){
    this.setData({
      warnSize:this.data.warnSize == 'default' ? 'mini' : 'default'
    })
  }
})
