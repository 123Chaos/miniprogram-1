// pages/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: ["24, 18, 241","111, 208, 219","249, 112, 205","95, 130, 62","19, 31, 245","126, 74, 68","161, 62, 55","235, 222, 254","241, 37, 207","136, 213, 179"],
  },
  // get5RandomRgba() {
  //   var r, g ,b;
  //   var list = [];
  //   for(var t=0;t<5;t++) {
  //     list = [];
  //     for(var i=0;i<3;i++) {
  //       r = Math.floor((Math.random()*100)%255);
  //       g = Math.floor((Math.random()*100)%255);
  //       b = Math.floor((Math.random()*100)%255);
  //       list = r.toString() + "," + g.toString() + "," + b.toString();
  //     }
  //   }
    
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    wx.showLoading({
      title: '数据加载中'
    })
    for(var i=0;i<2000;i++){}
    wx.hideLoading()
    this.setData({
      colorList: [...this.data.colorList, ...this.data.colorList]
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})