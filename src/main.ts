import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://127.0.0.1:5000/'
// axios.interceptors.request.use(config=>{
//   config.params = {...config.params}
// })

axios.get('/columns').then(resp => {
  console.log(resp.data)
})

createApp(App).use(store).use(router).mount('#app')
