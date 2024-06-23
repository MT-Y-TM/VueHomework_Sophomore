<template>
    <div class="siteTitle">
        <h1>欢迎访问下北泽养老基地官网</h1>
    </div>
    
    <!-- 利用element-plus的走马灯实现轮播图 -->
    <el-carousel :interval="4000" type="card" height="400px" margin="20px">
        <el-carousel-item v-for="item in items" :key="item.id">
            <img :src="item.image" alt="carousel image" style="width: 100%; height: auto;">
        </el-carousel-item>
      </el-carousel>
      <br>
      <!-- 利用element-plus的折叠面板实现关于我们 -->
      <div class="demo-collapse">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item name="1" title="关于下北泽养老基地？" class="custom-title">
            <p style="font-size: 40px;">
              华邦美好家园养老集团成立于2013年，是华邦控股集团旗下成员企业。构建了居家社区机构相协调，
            医养康养相结合的养老服务体系，全国连锁经营以“孝慈”命名的养老服务产品，
            矢志成为中国养老行业标准创建、模式创新、数智化运营的领先者。
            </p>
          </el-collapse-item>
          <el-collapse-item name="2" title="创始人寄语" class="custom-title">
            <p style="font-size: 30px;">
              在晚年时节，老人应该享受社会的尊重和优质的养老服务，为此，我们既要传承尊老敬老的文化，
              更要大力发展养老产业，把老龄化的冲击转变为银发市场的契机，促进经济社会持续健康发展。
              如何为社会分担养老照护方面的压力、为有需求的老年人群提供贴心舒适的养老环境一直是我深思的问题，
              2011年中，华邦控股集团与湛江市人民政府就“广东省湛江养老休闲产业基地”项目正式签约，这是华邦进军养老产业的第一段基石。
              2013年，华邦旗下的美好家园健养投资有限公司成立，2015年更名为美好家园养老集团有限公司，确立了华邦下一阶段以健康促进、
              养老养生为主要方向的发展布局，2019年更名为华邦美好家园养老集团有限公司，开启养老发展新纪元。
            </p>
          </el-collapse-item>
          <el-collapse-item name="3" title="标准创建" class="custom-title">
            <p style="font-size: 30px;">
              面对社会对高质量养老服务的迫切需求，充分发挥标准对养老服务的支撑引领作用，是增强养老服务供给能力的应有之义。
              华邦美好家园不断推进服务标准化建设，为提升养老行业服务质量积极助力，包括：编制并定期升级“标准化”丛书，
              制定并不断优化“八好服务”标准；承担多项民政部课题，编写、审改《养老护理员培训教材》《老年人能力评估规范》等国家专业教材
              及地方行业标准150余万字，为积极应对人口老龄化提供可复制、可推广的先进经验和行业服务标准。
            </p>
          </el-collapse-item>
          <el-collapse-item name="4" title="人才招聘" class="custom-title">
            <p style="font-size: 40px;">
              社工、社工主管、康复师、会计主管、社工实习生、产品副总监、坐席客服、服务员、助理、<br>
              文员、护工、保洁、保安、物业管理师、物业顾问、<br>
              物业助理、物业管理员、物业经理、物业主任、物业助理、物业保洁、物业管家、
            </p>
          </el-collapse-item>
        </el-collapse>
    </div>
</template>

<style scoped>  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

</style>


<script setup>
import { ref } from 'vue';

const items = [
    { id: 1, title: 'Slide 1', image: '../../../public/pic/FirstPage/1.jpg' },
    { id: 2, title: 'Slide 2', image: '../../../public/pic/FirstPage/2.jpg' },
    { id: 3, title: 'Slide 3', image: '../../../public/pic/FirstPage/3.jpg' },
    { id: 4, title: 'Slide 4', image: '../../../public/pic/FirstPage/4.jpg' },
];

const activeName = ref('1');
</script>