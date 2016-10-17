//app.js
App({
  onLaunch: function() { 
    // Do something initial when launch.
    print("onLaunch");
  },
  onShow: function() {
      // Do something when show.
    print("onShow");
  },
  onHide: function() {
      // Do something when hide.
    print("onHide");
  },
  globalData: 'I am global data'
})