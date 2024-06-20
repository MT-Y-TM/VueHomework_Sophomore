import { createApp } from 'vue';
import router from './router';

import App from './components/Layout/Home.vue';

//引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'




const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#app');
