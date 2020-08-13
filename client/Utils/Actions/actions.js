import { axiosWithAuth } from '../axiosWithAuth'

export const GET_DATA = 'GET_DATA'

const base_url = 'http://localhost:4000'
export const getData = () => (dispatch) => {
	axiosWithAuth()
		.get(`${base_url}/users/`)
		.then((res) => {
			console.log(res.data)
			dispatch({ type: GET_DATA, payload: res.data })
		})
		.catch((err) => {
			console.log(err)
		})
}
