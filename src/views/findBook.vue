<template>
  <div class="find">
    <ul>
      <li>排行榜</li>
      <li>分类</li>
    </ul>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    name: 'findBook'
  })
  export default class findBook extends Vue {}
</script>
<style scoped>
  .find {
    ul {
      list-style-type: none;
    }
  }
</style>
