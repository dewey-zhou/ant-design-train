<template>
  <div style="text-align:center; color:red">
    <IconFont style="font-size:100px; color:red" type="icon-ku" />
    <!-- <img :src="logourl" alt="" /> -->
    <Logo />
  </div>
</template>

<script>
// url形式
// import logo from "../assets/logo.svg";
// 组件形式
import Logo from "../assets/logo.svg";

export default {
  // data() {
  //   return {
  //     logourl: logo
  //   };
  // }
  components: {
    Logo
  }
};
</script>

<style lang="" scoped></style>
