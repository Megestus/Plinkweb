---
title: log
icon: fa-solid fa-file-lines
category:
  - log
tags:
  - log
date: 2024-10-22
# star: 1
article: false
---


### Version 1.0.1
- 2024-10-22  
    - 修复载入 maya utf-8 的错误。
    - 调整rename 和 quickrename 布局
  # HUGTools Install Script Improvements

  1. 多语言支持
    - 添加中文和英文语言支持
    - 根据系统编码和语言设置自动选择显示语言

  2. Maya 版本检测
    - 新增 `MayaVerObj` 类和 `get_maya_version()` 函数
    - 添加 `check_maya_version()` 函数，确保工具只在 Maya 2022 及以上版本运行

  3. 安装流程优化
    - 增加重新安装按钮
    - 改进 mod 文件的创建和更新逻辑
    - 增强安装、卸载和重新安装过程的错误处理和反馈

  4. 兼容性提升
    - 在 `install.mel` 中添加 UTF-8 编码检测，适应不同系统环境







### Version 1.0.0

- 2024-10-21 
  - 发布 HUGTools 1.0.0 版本，完成初步文档的部署。







