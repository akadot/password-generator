import { createApp } from 'vue'
import './global.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

library.add(faCopy)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
