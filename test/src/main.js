/*
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 18:37:31
 * @LastEditTime: 2020-04-22 18:54:05
 */
import Vue from 'vue'
import App from './App.vue'
import MyDialogPower from 'my-dialog-power'
import 'my-dialog-power/lib/my-dialog-power.css'
Vue.use(MyDialogPower)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
