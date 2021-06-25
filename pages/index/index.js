// index.js
// 获取应用实例
const app = getApp()
var protoFactory = require('../../proto/test').jspb.test.Simple1;
console.log(protoFactory)
let ws;
Page({
  data: {
    motto: '测试下',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  initWs() {
    ws = wx.connectSocket({
      url: 'ws://127.0.0.1:8095/webSocket',
      header: {
        'test': 'aaa'
      }
    });

    ws.onOpen(function () {
      console.log("连接已打开");

    });
    ws.onMessage(function (response) {
      let uint8Array = new Uint8Array(response.data);
      let instance2 = protoFactory.decode(uint8Array);
      console.log(instance2);
      console.log("收到服务器消息" + JSON.stringify(response) + "   " + response);
    });
    ws.onClose(function (data) {
      console.log("端口关闭" + JSON.stringify(data));
    });
    ws.onError(function (data) {
      console.log("错误！" + JSON.stringify(data));
    });
  },
  testProtoBuf: function (e) {
    console.log(protoFactory);
    var $int = 9999999;
    var step = 10;
    var Long = require("long");
    var base64 = require("@protobufjs/base64");
    var longVal = new Long(0x7FFFFFFF, 0x7FFFFFFF);
    console.log(longVal.toString());
      let instance = protoFactory.create();
      let buffer = protoFactory.encode(instance).finish();
    console.log(instance);
    if (ws && ws.readyState === 1) {
      // ws.send({ data: '数据为' + buffer });
      ws.send({data:buffer.buffer.slice()});
      // ws.send({data:1});
    } else {
      // _self.initWs();
      // console.log(ws);
    }
  }
})
