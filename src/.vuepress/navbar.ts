import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {text: "小组学习", icon:"graduation-cap",link:"小组学习"},
      {text: "游戏推荐",icon: "gamepad",link: "游戏推荐",},
      {text: "学校新闻",icon: "newspaper",link:"学校新闻"},
      {text: "随笔",icon: "pen-nib",link:"随笔"}
    ]
  },
  {
    text: "个人介绍",
    icon: "circle-info",
    link: "/intro"
  },
]);
