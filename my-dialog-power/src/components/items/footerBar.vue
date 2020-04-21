<template>
  <div class="dialog-power-footer">
    <div class="dialog-power-btn dialog-power-btn-ok" @click="ok($event)">确定</div>
    <div class="dialog-power-btn dialog-power-btn-cancel" @click="cancel($event)">取消</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /* 确定按钮触发 */
    ok(event) {
      this.$emit("ok", event);
    },
    /* 取消按钮触发 */
    cancel(event) {
      this.$emit("cancel", event);
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