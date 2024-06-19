<template>
    <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#f780fd',
        colorSuccess: '#67fc1d',
        colorWarning: '#fac014',
        colorInfo:    '#939efe',
      },
    }"
  >
  <a-layout>
    <common-header></common-header>
    <common-content></common-content>
    <common-footer></common-footer>
  </a-layout>
  </a-config-provider>
</template>

<style>
body #app{
    width: 100%;
    height: 100%;
    background-color: skyblue;
}
#app{
    max-width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
}
.ant-layout{    
    height: 100%;
    width: 100%;
}
</style>

<script setup>
import CommonHeader from './CommonHeader.vue'
import CommonSider from './CommonSider.vue'
import CommonContent from './CommonContent.vue'
import CommonFooter from './CommonFooter.vue'


</script>