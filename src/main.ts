import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './index.css'

library.add(faCheckSquare, faSquare, faDotCircle)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
