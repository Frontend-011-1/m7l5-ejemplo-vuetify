import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
// Vuetify
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Components
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
