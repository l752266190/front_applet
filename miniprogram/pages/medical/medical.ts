// remind.ts
Component({
  data: {
    content: '', // 用于存储文本输入
    time: '',    // 用于存储时间输入
  },
  methods: {
    onContentInput(e: any) {
      // 处理文本输入变化
      this.setData({
        content: e.detail.value,
      });
    },
    onInput(e: any) {
      // 处理数量输入变化
      this.setData({
        time: e.detail.value,
      });
    },
    onCancel() {
      // 处理取消按钮点击
      wx.navigateBack({
        delta: 1, // 返回上一页
      });
    },
    onConfirm() {
      // 处理确认按钮点击
      // 可以对输入的内容和时间进行处理，例如保存到存储或发送到服务器
      wx.showToast({
        title: '提醒已添加！',
        icon: 'success',
      });
      wx.navigateBack({
        delta: 1, // 返回上一页
      });
    },
  },
});
