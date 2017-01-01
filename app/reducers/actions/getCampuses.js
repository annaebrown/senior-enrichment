import axios from 'axios';

import {REQUEST_CAMPUSES} from './constants'


//action-creator: function that returns an action that changes the state

export function loadCampuses(campuses) {
	return {
		type: REQUEST_CAMPUSES,
		campuses 
	}
}

//async action creator

export function gettingAllCampuses () {
	return axios.get('/api/campuses')
		.then(res => res.data)
		.then(campuses => {
			return dispatch => {
				dispatch(loadCampuses(campuses))
			}
		})
}
