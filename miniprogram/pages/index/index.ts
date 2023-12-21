// index.ts
const app = getApp<IAppOption>()

Component({
  data: {
  
  },
  methods: {
    addReminder() {
      // 处理跳转到 remind 页面的逻辑

      wx.navigateTo({
        url: '/pages/remind/remind',
      })
    },
  },
})
