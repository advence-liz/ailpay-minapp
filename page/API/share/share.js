Page({
  data: { name: 'liz', share: false },
  tapPage() {
    console.log('tap page')
    // this.setData({share:false})
  },
  showShare(){
    // debugger
  my.showShareMenu()
  
  },
  onShareAppMessage() {
    this.setData({ name: 'ccc', share: true })
    // setTimeout(()=>{
    //   this.setData({share:false})
    // },1000)
    return {
      title: '分享 View 组件1',
      desc: 'View 组件很通用',
      path: 'page/component/view/view',
      // bgImgUrl:'http://img003.qufenqi.com/products/b1/fa/b1fab3b30e56780334d6ac3a2844598c.png'
      success: () => {
        console.log('succeed')

        this.setData({ name: 'success', share: false })
      },
      fail: () => {
        console.log('fail')
        this.setData({ name: 'fail', share: false })
      },
      complete: () => {
        console.log('fail')
        this.setData({ name: 'complete', share: false })
      }
    }
  }
})
