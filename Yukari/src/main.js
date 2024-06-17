import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { ConfigProvider } from 'ant-design-vue';
import App from './components/layout/home.vue';
import router from './router';

const app = createApp(App);

// 配置主题
app.use(Antd);
app.use(router);
app.mount('#app');
