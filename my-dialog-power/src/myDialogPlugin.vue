<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-04-22 18:57:13
 -->
<template>
  <div class="dialog-power-group">
    <div ref="dialogList" v-for="(item, i) in dataInfo" :key="i" class="dialog-power-main">
      <title-bar :title="item.title" @close="closeDialog" />
      <content-bar :content="item.content" />
      <footer-bar
        @ok="closeDialog(arguments[0],item.ok)"
        @cancel="closeDialog(arguments[0],item.cancel)"
      />
    </div>
  </div>
</template>

<script>
import titleBar from "./components/titleBar";
import contentBar from "./components/contentBar";
import footerBar from "./components/footerBar";
export default {
  name: "my-dialog-power",
  props: ["dataInfo"],
  data() {
    return {
      defaultTop: 0
    };
  },
  mounted() {
    this.initDialogTop();
  },
  components: {
    titleBar,
    contentBar,
    footerBar
  },
  wathe: {
    dataInfo(val) {
      if (val.length > 0) this.initDialogTop();
    }
  },
  computed: {},
  methods: {
    /* 初始化当前dialog顶部距离 */
    initDialogTop() {
      let self = this;
      let _dialogDom = self.$refs.dialogList;
      if (_dialogDom.length > 4) {
        self.defaultTop = 10;
      } else {
        self.defaultTop = 160;
      }
      _dialogDom.forEach((item, i) => {
        item.style = `top:${i * this.defaultTop + 10}px;`;
      });
    },
    /* 关闭当前弹窗信息 */
    closeDialog(event, callback) {
      // 获取当前dialog DOM元素
      let _msgDom = event.target.parentNode.parentNode;
      // 获取当前类名
      let _currentClass = _msgDom.className;
      // 触发关闭动画
      _msgDom.className = `${_currentClass} dialog-power-close`;
      // 定时移除当前关闭元素
      setTimeout(() => {
        _msgDom.remove();
        if (typeof callback === "function") callback();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.dialog-power-main {
  width: 278px;
  min-height: 126px;
  box-shadow: 0px 5px 10px rgba(1, 1, 1, 0.3);
  font-size: 12px;
  position: fixed;
  top: 10px;
  right: 10px;
  background: #fff;
}
.dialog-power-close {
  animation: dialogClose 1s 1;
}
@keyframes dialogClose {
  from {
    right: 10;
  }
  to {
    right: -300px;
  }
}
</style>