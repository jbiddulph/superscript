import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')

import { inject } from 'vue'

export default {
  name: 'Comp',
  setup() {
    const axios: any = inject('axios')  // inject axios
  }
}