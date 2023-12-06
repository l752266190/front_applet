// personalCenter.ts
Component({
  data: {
    userInfo: {
      avatarUrl: 'path_to_your_default_avatar', // 默认头像路径
      nickName: '未登录',
    },
    logged: false,
  },
  methods: {
    onLoad() {
      const userInfo = wx.getStorageSync('userInfo') || {};
      this.setData({
        userInfo,
        logged: Boolean(userInfo.nickName),
      });
    },
    onGetUserInfo(e: any) {
      if (e.detail.userInfo) {
        const { avatarUrl, nickName } = e.detail.userInfo;
        const userInfo = { avatarUrl, nickName };
        wx.setStorageSync('userInfo', userInfo);
        this.setData({
          userInfo,
          logged: true,
        });
        wx.showToast({
          title: '登录成功',
          icon: 'success',
        });
      } else {
        wx.showToast({
          title: '登录失败',
          icon: 'none',
        });
      }
    },
    onLogout() {
      wx.removeStorageSync('userInfo');
      this.setData({
        userInfo: {
          avatarUrl: 'path_to_your_default_avatar',
          nickName: '未登录',
        },
        logged: false,
      });
      wx.showToast({
        title: '已退出登录',
        icon: 'success',
      });
    },
  },
})
