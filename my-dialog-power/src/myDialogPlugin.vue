<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-07 18:02:37
 -->
<template>
  <div class="animated" :class="itemInfo.__classInfo__">
    <title-bar :title="itemInfo.title" @close="closeDialog('close')" />
    <content-bar :content="itemInfo.content" />
    <footer-bar @ok="closeDialog('ok')" @cancel="closeDialog('cancel')" />
  </div>
</template>

<script>
import titleBar from "./components/titleBar";
import contentBar from "./components/contentBar";
import footerBar from "./components/footerBar";
import "animate.css";
export default {
  props: ["items"],
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
      this.itemInfo.__classInfo__ = "lightSpeedOut";
      this.$emit(`${type}Dialog`, this.items);
    }
  }
};
</script>

<style scoped>
</style>