import { createApp } from 'vue';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { ConfigProvider } from 'ant-design-vue';
import App from './components/Layout/Home.vue';


const app = createApp(App);

// 配置主题
app.use(Antd);
app.use(router);
app.mount('#app');
