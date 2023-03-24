Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: 'hello world ',
    count: 0,
    msg: '空白串',
    type: 1,
    flag: true,
    uname: 'zs',
    array1: ['apple', 'banana', 'canon'],
    user_list: [{
        id: 1,
        name: "小红"
      },
      {
        id: 2,
        name: "小明"
      },
      {
        id: 3,
        name: "小花"
      }
    ]
  },
  btnTapHandler(e) {
    console.log(e);
  },
  countChange(e) {
    this.setData({
      info: e
    })
  },
  btnTap2(e) {
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  inputHandler(e) {
    console.log(e.detail.value);
  },
  iptHandler(e) {
    this.setData({
      msg: e.detail.value
    })
  },
  changeGender(e) {
    this.setData({
      type: -this.data.type
    })
  },
  gotodemo() {
    // 直接换tab
    wx.switchTab({
      url: '/pages/demo/demo',
    })
    // 后退导航 若delta大于现有页面数目，则返回首页
    // wx.navigateBack({
    //   delta: 1
    // })
  },
  // 发起GET请求
  getInfo() {
    wx.request({
      url: 'https://aip.baidubce.com',
      method: 'GET',
      data: {
        name: 'zs',
        age: 20
      },
      success: (res) => {
        console.log(res.data);
      }
    })
  },
  // 发起POST请求
  postInfo() {
    wx.request({
      url: 'url',
      method: 'POST',
      data: {
        name: 'ls',
        age: '33'
      },
      success: (res) => {
        console.log(res.data);
      }
    })
  },
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})