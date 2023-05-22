import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage'
import MarketPage from './pages/MarketPage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'homepage'
    },
    {
        path:'/market',
        component: MarketPage,
        name: 'market'
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')