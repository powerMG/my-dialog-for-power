<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-23 10:14:22
 * @LastEditTime: 2020-06-15 17:27:10
 -->

<template>
  <div id="app">
    <my-dialog-power
      :dataInfo.sync="dataInfo"
      @ok="ok"
      @cancel="cancel"
      @close="close"
      :zIndex="1"
      :bottom="66"
      :showCloseAll="dataInfo.length>=2"
      ref="dialogInfo"
    >
      <!-- <div slot="content">content</div>-->
      <!-- <template slot="footer">aaaaaaaaaaaaaaaaaaaaaaa</template> -->
      <template #footer="item">
        <div>footer{{item.row.title}}</div>
        <button @click="closeDialog(item.row)">关闭</button>
      </template>
    </my-dialog-power>
    <textarea cols="150" rows="30" :value="JSON.stringify(dataInfo)"></textarea>
    <br />
    <button @click="addData">添加</button>
    <button @click="addDataAuto">添加自动关闭</button>
  </div>
</template>

<script>
import myDialogPower from "./index.vue";
export default {
  name: "App",
  data() {
    return {
      dataInfo: []
    };
  },
  components: {
    myDialogPower
  },
  methods: {
    addData() {
      let _index = this.dataInfo.length;
      let _tempObj = {
        title: "进店提醒" + _index + 1,
        content: "测试进店提醒" + _index + 1,
        key: Math.random()
      };
      this.dataInfo.push(_tempObj);
    },
    addDataAuto() {
      let _index = this.dataInfo.length;
      let _tempObj = {
        title: "进店提醒" + _index + 1,
        content: "测试进店提醒" + _index + 1,
        key: Math.random(),
        isAuotClose: true,
        autoCloseNum: 3,
        titleBgColor: "#fff"
      };
      this.dataInfo.push(_tempObj);
    },
    ok() {
      console.log("ok");
    },
    cancel() {
      console.log("cancel");
    },
    close() {
      console.log("close");
    },
    closeDialog(item) {
      this.$refs.dialogInfo.slotCloseDialog(item);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
