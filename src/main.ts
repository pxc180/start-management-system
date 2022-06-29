import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.less';

createApp(App)
  .use(router)
  .use(ArcoVue, { componentPrefix: 'arco' })
  .mount('#app');
