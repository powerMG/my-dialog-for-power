<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-05-07 15:23:41
 * @LastEditTime: 2020-06-15 18:10:21
 -->
<template>
  <div class="dialog-power-group">
    <template v-for="item in currentDataInfo">
      <dialog-plugin
        :key="item.key"
        :ref="'dialogList'+item.__id__"
        :items="item"
        :isContent="isShowContent"
        :isFooter="isShowFooter"
        :isCloseAll="isCloseAll"
        @closeDialog="closeDialog(arguments[0],'close')"
        @okDialog="closeDialog(arguments[0],'ok')"
        @cancelDialog="closeDialog(arguments[0],'cancel')"
        @closeAll="closeAll"
        class="dialog-power-main"
        :style="styleInfo"
      >
        <slot name="content" :row="item" slot="content"></slot>
        <slot name="footer" :row="item" slot="footer"></slot>
      </dialog-plugin>
    </template>
  </div>
</template>

<script>
import dialogPlugin from "./myDialogPlugin";
export default {
  name: "my-dialog-power",
  props: ["dataInfo", "zIndex", "bottom", "showCloseAll"],
  data() {
    return {
      defaultBottom: 0,
      isShowContent: false,
      isShowFooter: false,
      styleInfo: ""
    };
  },
  mounted() {
    this.isShowContent = !(typeof this.$scopedSlots.content != "undefined");
    this.isShowFooter = !(typeof this.$scopedSlots.footer != "undefined");
    // 初始化计算高度
    this.initDialogInfo(this.currentDataInfo);
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
    },
    /* 计算是否显示全部关闭 */
    isCloseAll() {
      return this.showCloseAll || this.currentDataInfo.length > 5;
    }
  },
  components: {
    dialogPlugin
  },
  watch: {
    currentDataInfo(val) {
      setTimeout(() => this.initDialogInfo(val), 300);
    }
  },
  methods: {
    /* 初始化当前dialog顶部距离 */
    initDialogInfo(dataInfo) {
      let self = this;
      if (dataInfo.length > 1) {
        self.defaultBottom = self.bottom || 40;
      } else {
        self.defaultBottom = 40;
      }
      dataInfo.forEach((item, i) => {
        let _currentNum = i > 5 ? 5 : i;
        let _currentMaxNum = dataInfo.length > 5 ? 5 : dataInfo.length;
        let _currentVm = self.$refs[`dialogList${item.__id__}`][0];
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
          _currentVm.$el.style.bottom =
            (_currentMaxNum - _currentNum || 1) * self.defaultBottom + "px";
          if (self.zIndex > 0) {
            // _currentVm.$el.style.zIndex = self.zIndex;
            _currentVm.$el.style.zIndex = i;
          }
        } else {
          _currentVm.$el.style = `bottom:${(_currentMaxNum - _currentNum || 1) *
            self.defaultBottom}px;z-index:${self.zIndex};`;
        }
        item.__classInfo__ = "fadeInUp";
      });
    },
    /* 关闭当前弹窗信息 */
    closeDialog(item, type) {
      let self = this;
      self.$emit(`${type}`);
      let _removeInfo = self.currentDataInfo.find(
        itemInfo => itemInfo.__id__ === item.__id__
      );
      if (_removeInfo) {
        self.dataInfo.splice(self.currentDataInfo.indexOf(_removeInfo), 1);
      }
    },
    /* slot 关闭当前弹窗 */
    slotCloseDialog(item) {
      this.$refs[`dialogList${item.__id__}`][0].closeDialog("close");
    },
    /* 关闭所有窗体 */
    closeAll() {
      // 关闭所有
      this.$emit("update:dataInfo", []);
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
  bottom: 40px;
  right: 20px;
  opacity: 0;
  filter: alpha(opacity=0);
}
</style>