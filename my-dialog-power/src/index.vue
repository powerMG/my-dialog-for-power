<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-05-07 15:23:41
 * @LastEditTime: 2020-05-07 18:34:19
 -->
<template>
  <div class="dialog-power-group">
    <template v-for="item in currentDataInfo">
      <dialog-plugin
        :key="item.title"
        :ref="'dialogList'+item.__id__"
        :items="item"
        @closeDialog="closeDialog"
        class="dialog-power-main"
      />
    </template>
  </div>
</template>

<script>
import dialogPlugin from "./myDialogPlugin";
export default {
  name: "my-dialog-power",
  props: ["dataInfo"],
  data() {
    return {
      defaultTop: 0
    };
  },
  mounted() {
    this.initDialogTop(this.currentDataInfo);
  },
  computed: {
    /* 计算当前数据源信息 */
    currentDataInfo() {
      let _currentDataInfo = JSON.parse(JSON.stringify(this.dataInfo));
      return _currentDataInfo.map((item, i) => {
        item.__id__ = i;
        item.__classInfo__ = "";
        return item;
      });
    }
  },
  components: {
    dialogPlugin
  },
  watch: {
    currentDataInfo(val) {
      setTimeout(() => this.initDialogTop(val), 300);
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
        _currentVm.$el.style = `top:${i * self.defaultTop + 10}px;`;
        item.__classInfo__ = "fadeInUp";
      });
    },
    /* 关闭当前弹窗信息 */
    closeDialog(item) {
      let self = this;
      // 定时移除当前关闭元素
      setTimeout(() => {
        let _removeInfo = self.currentDataInfo.find(
          itemInfo => itemInfo.__id__ === item.__id__
        );
        if (_removeInfo) {
          self.dataInfo.splice(self.currentDataInfo.indexOf(_removeInfo), 1);
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
  background: #fff;
  position: fixed;
  top: 10px;
  right: 10px;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>