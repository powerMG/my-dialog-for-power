<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-06-15 17:30:11
 -->

# my-dialog-power

## Project setup

```
npm install my-dialog-power
```

### 文档使用说明：

```
import MyDialogPower from 'my-dialog-power'
import 'my-dialog-power/lib/my-dialog-power.css'
```

### 参数

> 属性

```
dataInfo:弹窗的数据集合:

dataInfo:[
  {
    title: "进店提醒", // 弹窗标题
    content: "测试进店提醒" // 弹窗内容
    key:1 // 唯一key
    [,isAuotClose: true] // 非必须项：是否自动关闭
    [,autoCloseNum: 3] // 非必须项：自动关闭时长（秒），默认3秒
    [,titleBgColor: "#fff"] // 非必须项：自定义标题的底色
  }
]
```

| 序号 | 属性名称 | 类型           | 说明                                     |
| ---- | -------- | -------------- | ---------------------------------------- |
| 1    | title    | String         | 标题                                     |
| 2    | content  | String         | 内容（注意：如果使用 slot 时该属性无效） |
| 3    | key      | Number\|String | 唯一标识，防止组件复用                   |
| 4    | zIndex   | Number         | 调整优先级                               |
| 5    | bottom   | Number         | 调整每个弹窗的间距                               |
| 6    | showCloseAll   | Boolen         | 是否开启全部关闭                               |

> 插槽

### content：内容插槽

```
<template #content="item">这是一个内容插槽{{item.row[.arguments]}}</template>
```

slot="footer"

### footer：底部按钮插槽

```
<div #footer="item">这是一个底部插槽{{item.row[.arguments]}}</div>
插槽关闭窗体需要通过ref=[名称]调用组件内的"slotCloseDialog"方法
slotCloseDialog(item.row){
  ……
}
```

> 事件

| 序号 | 属性名称 | 类型     | 说明       | 例子                       |
| ---- | -------- | -------- | ---------- | -------------------------- |
| 1    | close    | Function | 关闭后回调 | ()=>{console.log("close")} |
| 2    | cancel   | Funciton | 取消回调   | ()=>{console.log("cancel") |
| 3    | ok       | Function | 确定回调   | ()=>{console.log("ok")     |

### 版本号：

> V0.1.11

```
1：新增属性zIndex调整优先级
2：修复ie11兼容问题
```
> V0.1.12
```
1、解决属性zIndex无效问题
2、更换插槽使用方式并新增了获取循环体内内容
```