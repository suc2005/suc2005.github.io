import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/博文/",
    children: [
      {text: "小组学习", icon:"graduation-cap",link:"小组学习"},
      {text: "游戏推荐",icon: "gamepad",link: "游戏推荐",},
      {text: "学校新闻",icon: "newspaper",link:"学校新闻"},
      {text: "随笔",icon: "pen-nib",link:"随笔"},
      {text: "代码笔记",icon: "code",link:"代码笔记"}
    ]
  },
  {
    text: "个人介绍",
    icon: "circle-info",
    link: "/intro"
  },
  {
    text: "寝室主页",
    icon: "link",
    link: "https://rjj0228.gitee.io/dormitory617/"
  },
]);
