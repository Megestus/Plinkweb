import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://hugtools.github.io",

  author: {
    name: "Megestus",
    url: "https://github.com/Megestus",
  },

  logo: "/mainUI.png",

  favicon: "MainUI.png",

  repo: "Megestus/HUGTools",

  docsDir: "src",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  
  navbarAutoHide: "always",
  hideSiteNameOnMobile: true,

  navbar,
  sidebar,

  footer: "默认页脚",
  displayFooter: true,

  fullscreen: true,

  // 将这些选项移到顶级
  themeColor: true,
  darkmode: "switch",
  print: true,

  iconAssets: [
    "https://at.alicdn.com/t/c/font_4418036_zgdsmw3sdmc.css",
    "fontawesome-with-brands",
    "fontawesome",
    "iconify",
  ],

  plugins: {

    searchPro: true,
    
    markdownTab: {
      codeTabs: true,
    },

    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      tasklist: true,
      footnote: true,
      sub: true,
      sup: true,
    },
  },
});
