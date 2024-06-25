<template>
  <div class="common-layout">

      <common-header></common-header>
      
      <common-content></common-content>
      
      <common-footer></common-footer>

  </div>
</template>
  


<style>
body {
  margin: 0;
}

</style>

<script setup>
import CommonHeader from './CommonHeader.vue'
import CommonContent from './CommonContent.vue'
import CommonFooter from './CommonFooter.vue'
import Tips from '../Pages/Tips.vue';
</script>