<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 09:50:42
 * @LastEditTime: 2020-05-07 15:50:13
 -->
<template>
  <div class="dialog-power-footer">
    <div class="dialog-power-btn dialog-power-btn-ok" @click="ok()">确定</div>
    <div class="dialog-power-btn dialog-power-btn-cancel" @click="cancel()">取消</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /* 确定按钮触发 */
    ok() {
      this.$emit("ok");
    },
    /* 取消按钮触发 */
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.dialog-power-footer {
  overflow: hidden;
  padding: 5px;
}
.dialog-power-btn {
  height: 20px;
  width: 58px;
  border: solid 1px #f3f3f3;
  float: right;
  margin-right: 10px;
  border-radius: 4px;
  line-height: 20px;
  cursor: pointer;
}
/* .dialog-power-btn:last-child {
  margin-right: 0;
} */
.dialog-power-btn-ok {
  background: #4285f4;
  color: #fff;
}
.dialog-power-btn-ok:hover {
  background: #5f93ea;
}
.dialog-power-btn-cancel {
  background: #fff;
}
.dialog-power-btn-cancel:hover {
  background: #fbfbfb;
}
</style>