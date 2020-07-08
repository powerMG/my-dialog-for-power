<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-06-08 15:15:32
 -->
<template>
  <div class="animated animate__fast" :class="itemInfo.__classInfo__">
    <title-bar
      :title="itemInfo.title"
      :titleBgColor="itemInfo.titleBgColor"
      @close="closeDialog('close')"
    />
    <content-bar v-if="isContent" :content="itemInfo.content" />
    <slot name="content" />
    <footer-bar v-if="isFooter" @ok="closeDialog('ok')" @cancel="closeDialog('cancel')" />
    <slot name="footer" />
    <div
      v-if="isCloseAll"
      class="dialog-btn--closeAll animated"
      :class="[isCloseAll?'fadeIn':'']"
      @click="closeAll"
    >关闭全部</div>
    <!-- <div class="dialog-btn--closeAll animated">关闭全部</div> -->
  </div>
</template>

<script>
import titleBar from "./components/titleBar";
import contentBar from "./components/contentBar";
import footerBar from "./components/footerBar";
import "animate.css";
export default {
  props: ["items", "isContent", "isFooter", "isCloseAll"],
  data() {
    return {
      isIn: true,
      itemInfo: this.items,
      timer: null
    };
  },
  mounted() {
    if (this.itemInfo && this.itemInfo.isAuotClose) {
      this.timer = setTimeout(() => {
        this.closeDialog("close", true);
      }, (this.itemInfo.autoCloseNum || 3) * 1000);
    }
  },
  computed: {},
  components: {
    titleBar,
    contentBar,
    footerBar
  },
  watch: {},
  methods: {
    closeDialog(type, istimer) {
      // this.itemInfo.__classInfo__ = "zoomOutRight";
      this.itemInfo.__classInfo__ = "fadeOutRight";
      setTimeout(() => {
        this.$emit(`${type}Dialog`, this.items);
        // 手动触发并且是定时关闭的弹窗需要清定时器，防止找不到dom元素报错
        if (!istimer && this.itemInfo && this.itemInfo.isAuotClose) {
          clearTimeout(this.timer);
        }
      }, 800);
    },
    // 全部关闭
    closeAll() {
      this.$emit("closeAll");
    }
  }
};
</script>

<style scoped>
.dialog-btn--closeAll {
  text-align: right;
  border-top: 1px solid #e3e3e3;
  padding: 5px 20px;
  position: fixed;
  bottom: -28px;
  z-index: 1;
  height: 28px;
  width: 278px;
  background: #fff;
  box-shadow: 0 6px 4px rgba(1, 1, 1, 0.3);
  font-size: 12px;
  cursor: pointer;
  color: #4285f4;
  box-sizing: border-box;
}
</style>