import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/HUGweb/",

  lang: "zh-CN",
  title: "HUGToolBox",
  description: "HUGToolBox 的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
