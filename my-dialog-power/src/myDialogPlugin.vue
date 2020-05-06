<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-06 19:07:11
 -->
<template>
  <div class="dialog-power-group">
    <div
      v-for="(item, i) in currentDataInfo"
      :key="i"
      :ref="'dialogList'+item.__id__"
      class="dialog-power-main animated lightSpeedIn"
    >
      <title-bar :title="item.title" @close="closeDialog(arguments[0],arguments[1],item.__id__)" />
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
import "animate.css";
export default {
  name: "my-dialog-power",
  props: ["dataInfo"],
  data() {
    return {
      defaultTop: 0
    };
  },
  mounted() {
    this.initDialogTop(this.dataInfo);
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
      if (val.length > 0) setTimeout(() => this.initDialogTop(val), 300);
    }
  },
  methods: {
    /* 初始化当前dialog顶部距离 */
    initDialogTop(dataInfo) {
      let self = this;
      if (dataInfo.length > 4) {
        self.defaultTop = 10;
      } else {
        self.defaultTop = 160;
      }
      dataInfo.forEach((item, i) => {
        let _currentVm = self.$refs[`dialogList${item.__id__}`][0];
        _currentVm.style = `top:${i * self.defaultTop + 10}px;`;
      });
    },
    /* 关闭当前弹窗信息 */
    closeDialog(event, callback, id) {
      let self = this;
      // 获取当前dialog DOM元素
      let _msgDom = self.$refs[`dialogList${id}`][0];
      // 获取当前类名
      // let _currentClass = _msgDom.className;
      // 触发关闭动画
      _msgDom.className = `dialog-power-main animated lightSpeedOut`;
      // _msgDom.style = "right: -300px;";
      // 定时移除当前关闭元素
      setTimeout(() => {
        let _removeInfo = self.dataInfo.find(item => item.__id__ === id);
        console.log("_removeInfo", _removeInfo);
        if (_removeInfo) {
          self.dataInfo.splice(self.dataInfo.indexOf(_removeInfo), 1);
          // self.initDialogTop(self.dataInfo);
          if (typeof callback === "function") callback();
        }
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
  background: #fff;
  transition: right 1s;
}
.dialog-power-close {
  right: -300px !important;
  /* animation: dialogClose 1s 1; */
}
/* @keyframes dialogClose {
  from {
    right: 10;
  }
  to {
    right: -300px;
  }
} */
.dialog-power-main.dialog-power-item {
  right: 10px;
  /* animation: dialogShow 1s 1; */
}
/* @keyframes dialogShow {
  from {
    right: -300;
  }
  to {
    right: 10px;
  }
} */
</style>