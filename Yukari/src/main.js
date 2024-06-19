import { createApp } from 'vue';
import router from './router';

import App from './components/Layout/Home.vue';



const app = createApp(App);


app.use(router);
app.mount('#app');
