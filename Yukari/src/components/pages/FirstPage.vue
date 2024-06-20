<template>
    <el-carousel :interval="4000" type="card" height="200px" margin="20px">
        <el-carousel-item v-for="item in items" :key="item.id">
            <h3>{{ item.title }}</h3>
            <img :src="item.image" alt="carousel image" style="width: 100%; height: auto;">
        </el-carousel-item>
      </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>


<script setup>
const items = [
    { id: 1, title: 'Slide 1', image: '../../../public/pic/FirstPage/1.jpg' },
    { id: 2, title: 'Slide 2', image: '../../../public/pic/FirstPage/2.jpg' },
    { id: 3, title: 'Slide 3', image: '../../../public/pic/FirstPage/3.jpg' },
];
</script>