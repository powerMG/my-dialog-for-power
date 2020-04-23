<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-04-23 14:58:27
 -->
<template>
  <div class="dialog-power-group">
    <div ref="dialogList" v-for="(item, i) in currentDataInfo" :key="i" class="dialog-power-main">
      {{item.__id__}}
      <title-bar :title="item.title" @close="closeDialog(arguments[0],arguments[1],i)" />
      <content-bar :content="item.content" />
      <footer-bar
        @ok="closeDialog(arguments[0],item.ok,i)"
        @cancel="closeDialog(arguments[0],item.cancel,i)"
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
  computed: {
    /* 计算当前数据源信息 */
    currentDataInfo() {
      return this.dataInfo.map((item, i) => {
        item.__id__ = i;
        return item;
      });
    }
  },
  components: {
    titleBar,
    contentBar,
    footerBar
  },
  watch: {
    dataInfo(val) {
      if (val.length > 0) setTimeout(() => this.initDialogTop(), 300);
    }
  },
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
        item.className = `${item.className} dialog-power-item`;
        item.style = `top:${i * this.defaultTop + 10}px;`;
      });
    },
    /* 关闭当前弹窗信息 */
    closeDialog(event, callback, index) {
      let self = this;
      // 获取当前dialog DOM元素
      let _msgDom = event.target.parentNode.parentNode;
      // 获取当前类名
      let _currentClass = _msgDom.className;
      // 触发关闭动画
      _msgDom.className = `dialog-power-close ${_currentClass}`;
      // 定时移除当前关闭元素
      setTimeout(() => {
        // _msgDom.remove();
        self.dataInfo.splice(index, 1);
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
  right: -300px;
  background: #fff;
  transition: right 1s;
}
.dialog-power-close {
  right: -300px !important;
  /* animation: dialogClose 1s 1; */
}
@keyframes dialogClose {
  from {
    right: 10;
  }
  to {
    right: -300px;
  }
}
.dialog-power-main.dialog-power-item {
  right: 10px;
  /* animation: dialogShow 1s 1; */
}
@keyframes dialogShow {
  from {
    right: -300;
  }
  to {
    right: 10px;
  }
}
</style>