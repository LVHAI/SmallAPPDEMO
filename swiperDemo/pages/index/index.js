Page({
    data: {
        background: ['/images/1.png', '/images/2.png', '/images/3.png','/images/4.png'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 3000,
        duration: 1200
    },
    changeIndicatorDots: function (e) {
        console.log(e.detail.value+"changeIndicatorDots")
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeVertical: function (e) {
        console.log(e.detail.value+"changeVertical")
        this.setData({
            vertical: !this.data.vertical
        })
    },
    changeAutoplay: function (e) {
        console.log(e.detail.value+"changeAutoplay")
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        console.log(e.detail.value+"intervalChange")
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        console.log(e.detail.value+"durationChange")
        this.setData({
            duration: e.detail.value
        })
    },
    swiperChange:function(e){
        console.log(e.detail.current+"swiperChange")
    }
})
