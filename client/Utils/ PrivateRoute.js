import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const PrivateRoute = ({ component: Component, ...rest }) => {
	const [ cookies ] = useCookies()
	return (
		<Route
			{...rest} // path='/protected'
			render={(props) => {
				if (localStorage.getItem('token') == cookies['token']) {
					return <Component {...props} /> // Component being rendered is "Protected"
				} else {
					return <Redirect to="/login" />
				}
			}}
		/>
	)
}

export default PrivateRoute
