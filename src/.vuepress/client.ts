import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

export default defineClientConfig({
    enhance: ({ app }) => {
        // ...
    },
    setup() {
        setupRunningTimeFooter(
            new Date("2024-10-21"), // 将此日期更改为您的网站开始运行的日期
            {
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
                "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
            },
            true, // 设置为 true 以保留页脚的原有内容
        );
    },
});
