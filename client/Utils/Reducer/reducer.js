import { GET_DATA } from '../Actions/actions'

const initialState = {
	data: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			console.log(action.payload)
			return { data: action.payload }

		default:
			return state
	}
}
