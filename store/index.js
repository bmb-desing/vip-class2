import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Menu from './menu'
import Setting from './setting'
import Form from './form'
import Object from './object'
Vue.use(Vuex)
export const state = () => ({
	counter: 0
})
const store = () => new Vuex.Store({
	modules: {
		Menu,
		Form,
		User,
		Setting,
    Object
	}
})
export default store
