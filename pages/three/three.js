Page({
  data: {
    msg: "第三个页面双向绑定message",
    inputValue: "input value"
  },
  onLoad() {
    console.log("three onLoad...");
  },
  coverImageLoad() {
    console.log("图片加载成功");
  }
})