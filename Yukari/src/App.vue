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
  <a-button type="primary" :style="{display: 'block', margin: 'auto auto'}">Hello World</a-button>
  </a-config-provider>
</template>