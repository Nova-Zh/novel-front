<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component()
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
  .home {
    position: relative;
    .tool-bar {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>
