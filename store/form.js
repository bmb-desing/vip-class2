import {state} from "./index";

export default {
	state: {
		showForm: false,
		showError: false,
		showCarousel: false,
		form: {
			name: {
				placeholder: 'Ваше имя*',
				vvName: 'Имя', 
				name: 'name',
				value: '',
				validate: 'required'
			},
			phone: {
				placeholder: 'Номер Телефона*',
				vvName: 'Телефон',
				name: 'phone',
				validate: {required : true, regex:/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/}
			},
			email: {
				placeholder: 'Ваш E-mail',
				name: 'email',
				value: '',
				vvName: 'E-mail',
				validate: 'required|email'
			}
		},
		theme: '',
		status: null,
		sendForm: false
	},
	getters: {
		showCarousel: (state) => {
			return state.showCarousel
		},
		showForm: (state) => {
			return state.showForm
		},
		showError: (state) => {
			return state.showError
		},
		getForm: (state) => {
			return state.form
		},
		statusSend: (state) => {
			return state.status
		},
		userSendForm: (state) => {
			return state.sendForm
		},
	},
	mutations: {
		showForm: (state, payload) => {
			return [
				state.theme = payload,
				state.showForm = true
			]
		},
		showCarousel: (state) => {
			return state.showCarousel != state.showCarousel
		},
		closeForm: (state) => {
			return state.showForm = false
		},
		sendErrors: (state) => {
			return state.showError = true
		},
		
		sendForm: (state, payload) => {
			const form = {
				name: payload.name.value,
				phone: payload.phone.value,
				email: payload.email.value
			}
			/* @TODO  Добавить отправку на сервер*/
			state.status = true
			setTimeout(() => {
				state.status = null
				state.showForm = false
			}, 2000)
			return this
		}
	}
}