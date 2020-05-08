<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-08 17:51:36
 -->
<template>
  <div class="animated animate__fast" :class="itemInfo.__classInfo__">
    <title-bar :title="itemInfo.title" @close="closeDialog('close')" />
    <content-bar v-if="isContent" :content="itemInfo.content" />
    <slot name="content" />
    <footer-bar v-if="isFooter" @ok="closeDialog('ok')" @cancel="closeDialog('cancel')" />
    <slot name="footer" />
  </div>
</template>

<script>
import titleBar from "./components/titleBar";
import contentBar from "./components/contentBar";
import footerBar from "./components/footerBar";
import "animate.css";
export default {
  props: ["items", "isContent", "isFooter"],
  data() {
    return {
      isIn: true,
      itemInfo: this.items
    };
  },
  mounted() {},
  computed: {},
  components: {
    titleBar,
    contentBar,
    footerBar
  },
  watch: {},
  methods: {
    closeDialog(type) {
      this.itemInfo.__classInfo__ = "zoomOutRight";
      this.$emit(`${type}Dialog`, this.items);
    }
  }
};
</script>

<style scoped>
</style>