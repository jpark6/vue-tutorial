<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import 'ant-design-vue/dist/antd.css';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
  @import "@/styles/app.scss";
</style>
