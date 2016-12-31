import axios from 'axios';
// import {connect} from 'react-redux';
// import campuses from '../components/campuses'
//don't forget to import campus component here

import {
	REQUEST_CAMPUSES from './constants'
}

//action-creator: function that returns an action that changes the state

export function receiveCampuses(campuses) {
	return {
		type: REQUEST_CAMPUSES,
		campuses
	}
}

//loading campuses from the server

export function gettingAllCampuses() {
	return axios.get('/api/campuses')
		.then(res => {
			dispatch(receieveCampuses(res.data))
		})
}
// const mapStateToProps = state => {
// 	return {
// 		campuses: state.campuses
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		dispatch => {
// 			axios.get('/api/campuses')
// 			.then(response => {
// 				dispatch(loadAllCampuses(response.data))
// 			})
// 		}
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(//campus component)