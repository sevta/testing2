import { createStore , combineReducers } from 'redux'

const authState = {
	auth: false,
	user: null
}

export const auth = (state = authState , action) => {
	switch (action.type) {
		case 'LOGIN':
		return {
			...state,
			auth: action.payload,
			user: action.user
		}
		default:
		return state
	}
}

export const store = createStore(combineReducers({
	auth
}))

store.subscribe(() => {
	console.log('store' , store.getState())
})

