import myDialogPlugin from './commponents/myDialogPlugin.vue'
myDialogPlugin.install = Vue => Vue.component(myDialogPlugin.name, myDialogPlugin);
export default myDialogPlugin;