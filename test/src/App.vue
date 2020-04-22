<!--
 * @Author: xmwang
 * @LastEditors: xmwang
 * @Date: 2020-04-22 18:37:31
 * @LastEditTime: 2020-04-22 19:14:14
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <my-dialog-power :dataInfo="dataInfo" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      dataInfo: [
        {
          title: "进店提醒",
          content: "测试进店提醒",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
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
          title: "进店提醒3",
          content: "测试进店提醒1",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒4",
          content: "测试进店提醒1",
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒5",
          content: "测试进店提醒1",
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
    HelloWorld
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
