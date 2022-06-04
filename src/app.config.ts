export default defineAppConfig({
  pages: ["pages/index/index", "pages/my/index", "pages/statistics/index"],
  tabBar: {
    selectedColor: "#e32219",
    list: [
      {
        iconPath: "assets/images/tabar/home.png",
        selectedIconPath: "assets/images/tabar/home_active.png",
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        iconPath: "assets/images/tabar/chart.png",
        selectedIconPath: "assets/images/tabar/chart_active.png",
        pagePath: "pages/statistics/index",
        text: "统计",
      },
      {
        iconPath: "assets/images/tabar/my.png",
        selectedIconPath: "assets/images/tabar/my_active.png",
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
