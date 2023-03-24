// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zs: 10,
    age: 9,
    // 存放轮播图的数组
    swiper_list: ["img/img1.png", "img/img2.png", "img/img3.png"],
    grid_list: [{
      img: "img/grid1.png",
      name: "grid1"
    }, {
      img: "img/grid2.png",
      name: "grid2"
    }, {
      img: "img/grid3.png",
      name: "grid3"
    }, {
      img: "img/grid4.png",
      name: "grid4"
    }, {
      img: "img/grid5.png",
      name: "grid5"
    }, {
      img: "img/grid6.png",
      name: "grid6"
    }, {
      img: "img/grid7.png",
      name: "grid7"
    }, {
      img: "img/grid8.png",
      name: "grid8"
    }, {
      img: "img/grid9.png",
      name: "grid9"
    }]
  },
  getSwiperList() {
    wx.request({
      url: '',
      method: "GET",
      success: (res) => {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('id',options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh({
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('触发了上拉触底事件');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})