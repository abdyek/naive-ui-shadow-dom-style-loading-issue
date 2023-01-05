import { createApp } from "vue"
import VueLatex from 'vatex'
import shadow from 'vue-shadow-dom'
import App from "./App.vue"

const app = createApp(App)

app.use(VueLatex)
app.use(shadow)

app.mount("#app")
