<template>
  <div>
    <HeaderBar />
    <router-view />
  </div>
</template>

<script>
import HeaderBar from "./features/navbar/components/HeaderBar";

export default {
  name: "App",
  components: {
    HeaderBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9fafc;
}
</style>
