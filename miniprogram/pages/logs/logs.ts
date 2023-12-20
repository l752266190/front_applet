// logs.ts

Component({
  data: {
    logs: [],
  },
  methods: {
    addMedical() {
      // 处理跳转到 remind 页面的逻辑

      wx.navigateTo({
        url: '/pages/medical/medical',
      })
    },
  },
})
