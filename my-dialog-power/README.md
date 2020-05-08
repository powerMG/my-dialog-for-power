<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-08 14:45:56
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
    title: "进店提醒",
    content: "测试进店提醒"
    primaryKey:1
  }
]
```
| 序号 | 属性名称   | 类型| 说明 |
| ---- | ---- | ---- |---- |
| 1    | title | String | 标题 |
| 2    | content | String | 内容（注意：如果使用 slot 时该属性无效）     |
| 3    | primaryKey | Number\|String | 主键 key（用于唯一标识，防止组件销毁不彻底） | 

> 插槽

### content：内容插槽
```
<div slot="content">这是一个内容插槽</div>
```

### footer：底部按钮插槽
```
<div slot="footer">这是一个底部插槽</div>
```

> 事件

| 序号 | 属性名称 | 类型     | 说明       | 例子                       |
| ---- | -------- | -------- | ---------- | -------------------------- |
| 1    | close    | Function | 关闭后回调 | ()=>{console.log("close")} |
| 2    | cancel   | Funciton | 取消回调   | ()=>{console.log("cancel") |
| 3    | ok       | Function | 确定回调   | ()=>{console.log("ok")     |
### 版本号：
V0.1.7
