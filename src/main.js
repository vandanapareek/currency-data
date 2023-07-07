import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.apilayer.com/currency_data'
axios.defaults.timeout = 10000;
axios.defaults.headers = {
    apikey:process.env.VUE_APP_API_KEY
}

createApp(App).mount('#app')
