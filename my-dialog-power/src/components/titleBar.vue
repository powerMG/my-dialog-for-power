<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-07 15:49:36
 -->
<template>
  <div class="dialog-power-title">
    <div class="dialog-power-title-item dialog-power-title-left">{{title}}</div>
    <div class="dialog-power-title-item dialog-power-title-right" @click="closeDialog()">X</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    /* 关闭窗体 */
    closeDialog() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.dialog-power-title {
  height: 32px;
  background: #4285f4;
  border-bottom: solid 1px #f3f3f3;
  color: #fff;
  line-height: 32px;
  text-align: left;
  padding-left: 10px;
}
.dialog-power-title-item {
  float: left;
}
.dialog-power-title-left {
  width: 90%;
}
.dialog-power-title-right {
  width: 10%;
  cursor: pointer;
  text-align: center;
}
</style>