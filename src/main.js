import { defineCustomElement } from 'vue'
import App from './App.ce.vue'
import './app.css'

const weatherComponent = defineCustomElement(App)
customElements.define('weather-app', weatherComponent)
