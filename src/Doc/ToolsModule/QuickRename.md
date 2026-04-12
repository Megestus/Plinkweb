---
title: QuickRename module
icon: fa-solid fa-bolt
category:
  - Tools Module
tags:
  - Quick Rename
  - Maya
date: 2024-03-21
article: false
---

QuickRename 模块提供了一套快速重命名工具，用于快速处理Maya场景中的命名需求。

## 主要功能

### 1. 快速后缀添加

- **LOD后缀**: 支持快速添加_La、_Lb、_Hi等LOD相关后缀
- **临时标记**: 支持添加_Temp临时标记后缀
- **一键添加**: 选中物体后一键添加所需后缀

### 2. 快速分组

- **LOD分组**: 支持La_mesh、Lb_mesh、Hires等LOD相关分组
- **功能分组**: 支持Retopo、Temp_mesh、Concept等功能性分组
- **自动创建**: 自动创建组并将选中物体放入组中

### 3. 显示层管理

- **LOD层**: 支持创建La、Lb、Hi等LOD相关显示层
- **功能层**: 支持创建RetopoMesh、Temp、Mesh等功能性显示层
- **自动添加**: 自动创建显示层并将选中物体添加到层中

### 4. 实用工具

- **前缀清理**: 一键移除"pasted__"等无用前缀
- **左右命名**: 支持快速创建左右对称物体的命名(L/R)
- **实时反馈**: 操作后在视图中显示即时反馈信息

## 使用说明

1. 选择需要处理的物体
2. 点击对应功能按钮执行操作:
   - 点击后缀按钮添加后缀
   - 点击分组按钮创建并归入新组
   - 点击显示层按钮创建并添加到新层
   - 点击工具按钮执行特殊功能

## 界面特点

- **圆角按钮**: 采用现代圆角按钮设计
- **分组布局**: 功能按类别清晰分组
- **悬停效果**: 按钮具有悬停和点击视觉反馈
- **置顶窗口**: 窗口始终保持在最前显示

## 注意事项

- 使用前请确保选择了正确的物体
- 分组和显示层操作会保持原有选择状态
- 左右命名功能会自动冻结变换属性 

## 自定义配置

您可以根据自己的需求自定义快速重命名模块的前后缀、分组和显示层按钮。

### 修改位置

所有自定义内容都在 `Scripts/Module/Quick_Rename_Module.py` 文件中：

### 1. 自定义前后缀按钮

在 `create_widgets` 函数中（第 70-78 行），修改 `quick_prefix_suffix_btns` 列表：

```python
self.quick_prefix_suffix_btns = [
    RoundedButton("SM_"),
    RoundedButton("T_"),
    RoundedButton("G_"),
    RoundedButton("_SM"),
    RoundedButton("_Low"),
    RoundedButton("_Hi"),
    RoundedButton("_Temp")
]
```

- 以 `_` 开头的按钮会被识别为后缀
- 其他按钮会被识别为前缀
- 可以添加、删除或修改按钮文本来自定义前后缀选项

### 2. 自定义分组按钮

在 `create_widgets` 函数中（第 82-89 行），修改 `quick_group_buttons` 列表：

```python
self.quick_group_buttons = [
    RoundedButton("mesh"),
    RoundedButton("Temp"),
    RoundedButton("Lowres"),
    RoundedButton("Hires"),
    RoundedButton("Retopo"),
    RoundedButton("Concept")
]
```

- 每个按钮的文本就是要创建的组名
- 点击按钮会自动创建对应名称的组并将选中物体放入其中

### 3. 自定义显示层按钮

在 `create_widgets` 函数中（第 93-99 行），修改 `quick_layer_buttons` 列表：

```python
self.quick_layer_buttons = [
    RoundedButton("HiMesh"),
    RoundedButton("LowMesh"),
    RoundedButton("RetopoMesh"),
    RoundedButton("Temp"),
    RoundedButton("Mesh")
]
```

- 每个按钮的文本就是要创建的显示层名
- 点击按钮会自动创建对应名称的显示层并将选中物体添加到其中

### 提示

- 修改后重启 Maya 或重新加载插件使更改生效
- 建议在修改前备份原始文件
- 按钮数量会自动适应网格布局（每行 3 个按钮）