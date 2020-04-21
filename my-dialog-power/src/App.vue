<template>
  <div id="app">
    <my-dialog-plugin :dataInfo="sourceInfo"/>
  </div>
</template>

<script>
import myDialogPlugin from "./components/myDialogPlugin.vue";

export default {
  name: "App",
  data() {
    return {
      sourceInfo: [
        {
          title: "进店提醒",
          content: "苏EW25Y5车辆进店，距车险到期16天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
          ok: () => {
            console.log("ok");
          },
          cancel: () => {
            console.log("cancel");
          }
        },
        {
          title: "进店提醒",
          content: "苏EW1111车辆进店，距车险到期17天",
          dialogType: 1,
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
    myDialogPlugin
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
