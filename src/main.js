import { createApp } from 'vue'
import "./styles/main.css"
import App from './App.vue'
import Aos from 'aos';
import "aos/dist/aos.css";

createApp(App).mount('#app')

Aos.init({
    duration: 1000,
    once: false,
    mirror: true,
});