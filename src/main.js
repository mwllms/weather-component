import { defineCustomElement } from 'vue'
import App from './App.ce.vue'

const weatherComponent = defineCustomElement(App)
customElements.define('weather-app', weatherComponent)
