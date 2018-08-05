// import { combineReducers } from 'redux';

import initialState from './initialState';

export default function memberReducer(state=initialState, action){
	let new_state;
	switch(action.type){
		case "ADD_MEMBER":
			new_state=JSON.parse(JSON.stringify(state));
			new_state.membersData[action.data.phone]={
				firstName: action.data.firstName,
				lastName: action.data.lastName,
				status: 'active',
				role: action.data.role,
				emailId: action.data.emailId
			}
			new_state.isFetching= false;
			new_state.error= null
			return Object.assign({}, new_state);

		case "EDIT_MEMBER":
			new_state=JSON.parse(JSON.stringify(state));
			new_state.membersData[action.data].status = 'inactive';
			return Object.assign({}, new_state);
		default:
			return state
	}
}