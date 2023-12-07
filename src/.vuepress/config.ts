import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hope, hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "苏畅的博客",
  description: "苏畅的个人博客",

  theme/*: hopeTheme({
    iconAssets:"iconify"
  }),*/

  // Enable it with pwa
  // shouldPrefetch: false,
});
