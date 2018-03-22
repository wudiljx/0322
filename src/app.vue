
<template>
  <div id="app">
      {{text}}
  </div>
</template>

<script>
export default {
//   vue初始化数据存放的地方
// 申明组件之后创建文件webpack.config.js文件
  data () {
      return {
          text : 'Hello World'
      }
  }
}
</script>

<style>
    #app{
        color :brown;
    }
</style>
