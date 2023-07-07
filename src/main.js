import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.apilayer.com/currency_data'
axios.defaults.timeout = 10000;
const API_KEY = process.env.VUE_APP_API_KEY
axios.defaults.headers = {
    apikey:API_KEY
}

createApp(App).mount('#app')
