// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'小程序初体验',
      num:22,
      students:[
        {name:'zs',age:21},
        { name: 'ls', age: 22 },
        { name: 'ww', age: 23 },
        { name: 'zl', age: 24 }
      ],
      c_num:0

  },

  addCnum(){
     /**
     * 这种写法只能更改data里的数据，但不会刷新页面显示
     */
    // this.data.c_num+=1;
   
   //必须得调用this.setData({})进行设置;
    this.setData({
      c_num:this.data.c_num+1
    });

  },
  deCnum(){
    this.setData({
      c_num:this.data.c_num-1
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }



})