import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import {
	focusDirective,
	rainbowDirective,
	customOnDirective,
	clickOutsideDirective
} from './directives'
import './css/styles.css'

const app = createApp(App)

app.directive('focus', focusDirective)
app.directive('rainbow', rainbowDirective)
app.directive('custom-on', customOnDirective)
app.directive('click-outside', clickOutsideDirective)

app.use(router)
app.use(store)
app.mount('#app')
