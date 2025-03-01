import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Plinkools/",

  lang: "zh-CN",
  title: "PlinkTool",
  description: "PlinkToolBox 的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
