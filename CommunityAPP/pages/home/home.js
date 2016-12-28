
var getNewDatas = require('../../datas/httpsTools.js');
var util = require('../../utils/util.js')
var Api = require('../../utils/api.js')

Page({
  data:{
    hidden: false,
    loadtxt: '正在加载',
    currentId: '1001',
    top_bar_sections:[
        {name : '最新',id : '1001'},{name : '最热',id : '1002'},
        {name : '沙发',id : '1003'},{name : '精华',id : '1004'},],
    autoplay: true,
    interval: 5000,
    datas:[],
    type: "recent",
    indicatorDots:true,
    // banner:[]
  },
  // 按钮点击事件
  onTapTag:function(e){
      console.log(e)
      let id = e.currentTarget.id
      if(id){
        this.setData({ currentId:id})
      }
  },
  //判断Object对象是否为空
  isEmptyObject: function(e){ 
        let t;  
        for (t in e)  
            return !1;  
        return !0  
    },
  onLoad:function(options){
    this.getAds("123");
    this.fetchData({type: 'recent'});
  },
  getAds:function(param_data){
    let param = {
        API_URL: Api.getTopicAds(),
        data:null,
    };

    getNewDatas.result(param).then( datas =>{
      console.log(datas.data.ads)
      this.setData({
          banner: datas.data.ads,
        });
    }).catch(e => {

    });
  },
  fetchData:function(data){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    let param = {
        API_URL: Api.getTopics(data),
        data:null,
    };
    // 获取数据后回调
    getNewDatas.result(param).then( datas => {
      console.log(datas.data.topics)

      that.setData({
        datas:that.data.datas.concat(datas.data.topics.map(function(item){
          item.created_at = util.getDateDiff(new Date(item.created_at))
          if(item.user.avatar_url.indexOf('testerhome') != -1){
            item.user.avatar_url = 'https:' + item.user.avatar_url;
          }else{
            item.user.avatar_url = 'https://testerhome.com/' + item.user.avatar_url;
          }
          return item
        })),
        hidden:true
      })
    }).catch(e => {

        that.setData({
            loadtxt: '数据加载异常',
            loading: false
        })

        console.error(e);
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    // this.setData({
    //   hidden:true
    // })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // 轮播图点击事件
  bindViewTap:function(e){
    var id = e.currentTarget.dataset.id;
    console.log(e.currentTarget);
    console.log('我要看详情');
    let url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url
    })
  }
})