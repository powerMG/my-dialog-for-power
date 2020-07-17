/*
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-07-17 20:13:54
 */
import myDialogPlugin from "./index.vue";
const components = [myDialogPlugin]
/**
 * 绑定组件
 * @param Vue
 */
function bindComponents(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

/**
 * 为了使用 Vue.use() 使用插件
 * @param Vue
 */
function install(Vue) {
    bindComponents(Vue)
}
export default { install, myDialogPlugin }