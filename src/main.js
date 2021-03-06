import 'noto-sans-kr'
import 'ant-design-vue/dist/antd.css'
import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import routes from './routes'

import Antd from 'ant-design-vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'

const router = new VueRouter({ routes })

Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(VueAnalytics, {router, id: 'UA-123415597-1'})

new Vue({ render: h => h(App), router }).$mount('#app')
