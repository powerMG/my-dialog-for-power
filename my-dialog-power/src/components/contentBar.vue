<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-09 13:35:51
 -->
<template>
  <div class="dialog-power-content">{{content}}</div>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.dialog-power-content {
  min-height: 58px;
  color: #202742;
  padding: 16px 20px 0 20px;
  line-height: 20px;
}
</style>