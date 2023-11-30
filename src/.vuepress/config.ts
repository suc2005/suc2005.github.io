import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "苏畅的博客",
  description: "苏畅的个人博客",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
