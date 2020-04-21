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
}
</style>