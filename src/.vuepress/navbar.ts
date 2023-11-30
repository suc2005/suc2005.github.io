import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "游戏推荐",
        icon: "pen-to-square",
        prefix: "游戏推荐/",
        children: [
          { text: "Bitburner", icon: "pen-to-square", link: "bitbuner" },
        ],
      }
    ]
  },
  {
    text: "个人介绍",
    icon: "circle-info",
    link: "/intro"
  },
]);
