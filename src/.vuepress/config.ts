import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/HUGweb/",

  lang: "zh-CN",
  title: "HUGToolBox",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // 删除这个 plugins 配置，因为 searchPro 已经在 theme.ts 中配置了
  // plugins: [
  //   searchProPlugin({
  //     // 配置选项
  //   }),
  // ],
});
