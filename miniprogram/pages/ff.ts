Component({
  data: {
    userInfo: {
      avatarUrl: 'path_to_your_default_avatar',
      nickName: '华佗',
      gender: '男',
      birthday: '6.18',
      height: '170',
      weight: '60',
    },
    isEditingNickname: false,

  },
  methods: {
    onEditAvatar() {
      // 处理编辑头像的逻辑
    },
    startEditingNickname() {
      this.setData({
        isEditingNickname: true,
      });
    },

    stopEditingNickname() {
      this.setData({
        isEditingNickname: false,
      });
    },
     /* onInputNickname(event) {
      this.setData({
        newNickname: event.detail.value,
      });
    },*/
    onEditNickname() {
      // 处理编辑昵称的逻辑
    },
    onEditGender() {
      // 处理编辑性别的逻辑
    },
    onEditBirthday() {
      // 处理编辑生日的逻辑
    },
    onEditHeight() {
      // 处理编辑身高的逻辑
    },
    onEditWeight() {
      // 处理编辑体重的逻辑
    },
    onComplete() {
      // 处理点击完成按钮的逻辑
      wx.showToast({
        title: '个人资料已更新',
        icon: 'success',
      });
    },
    onBack() {
      // 处理点击返回按钮的逻辑，可以是返回上一页或者其他操作
      wx.navigateBack({
        delta: 1, // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
      });
    },
  },
})
