import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",

    {
      text: "Documentation",
      icon: "laptop-code",
      prefix: "Doc/",
      link: "Doc/",
      children: "structure",
    },
  ],
});
