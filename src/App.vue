<template>
  <div id="app">
    <div class="tool-bar">
      <div @click="linkBook">书架</div>
      <div @click="findBook">找书</div>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

  @Component()
  export default class Home extends Vue {
    linkBook() {
      this.$router.push('bookShelf')
    }
    findBook() {
      this.$router.push('findBook')
    }
  }
</script>
<style lang="scss" scoped>
html {
  font-size: 20px;
}
#app {
  font-family: 'PingFang SC', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.tool-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2rem;
  width: 100%;
  display: flex;
  background: #f1f1f1;
  div {
    width: 50%;
    text-align: center;
    line-height: 2rem;
  }
}
</style>
