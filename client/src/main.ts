import Vue from 'vue'
import App from './app.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
  render: h => h(App)
}).$mount('#app')
