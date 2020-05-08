<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-23 10:14:22
 * @LastEditTime: 2020-05-08 14:18:46
 -->

<template>
  <div id="app">
    <my-dialog-power :dataInfo.sync="dataInfo" @ok="ok" @cancel="cancel" @close="close">
      <!-- <div slot="content">content</div>
      <div slot="footer">footer</div>-->
    </my-dialog-power>
    <textarea cols="150" rows="30" :value="JSON.stringify(dataInfo)"></textarea>
    <br />
    <button @click="addData">添加</button>
  </div>
</template>

<script>
import myDialogPower from "./index.vue";
export default {
  name: "App",
  data() {
    return {
      dataInfo: [
        {
          title: "进店提醒1",
          content: "测试进店提醒1",
          primaryKey: "title",
          showFooter: true,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒2",
          content: "测试进店提醒2",
          primaryKey: "title",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒3",
          content: "测试进店提醒3",
          primaryKey: "title",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒4",
          content: "测试进店提醒4",
          primaryKey: "title",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒5",
          content: "测试进店提醒5",
          primaryKey: "title",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        }
      ]
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
        ok: () => {
          console.log("ok");
        },
        cancel: () => {
          console.log("cancel");
        }
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
