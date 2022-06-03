export default defineAppConfig({
  pages: ["pages/index/index", "pages/my/index"],
  tabBar: {
    selectedColor: "#e32219",
    list: [
      {
        iconPath: "resource/images/tabar/home.jpg",
        selectedIconPath: "resource/images/tabar/home_active.jpg",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "resource/images/tabar/my.jpg",
        selectedIconPath: "resource/images/tabar/my_active.jpg",
        pagePath: "pages/my/index",
        text: "我的",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
