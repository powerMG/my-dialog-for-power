<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-23 10:14:22
 * @LastEditTime: 2020-05-07 18:35:13
 -->

<template>
  <div id="app">
    <my-dialog-power :dataInfo.sync="dataInfo" />
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
