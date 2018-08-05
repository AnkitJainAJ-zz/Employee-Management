export function addMember(newMember){
	return {
		type: 'ADD_MEMBER',
		data: newMember
	}
}

export function editMember(newData){
	return {
		type: 'EDIT_MEMBER',
		data: newData
	}
}
