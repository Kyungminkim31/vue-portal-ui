import Vue from 'vue'
//import App from './App.vue'
import MyApp from './MyApp.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  //render: h => h(App)
  render: h => h(MyApp)
}).$mount('#app')
