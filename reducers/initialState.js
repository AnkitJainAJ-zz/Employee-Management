const state = {
	membersData:{
		8105254933: {
			firstName:"Ankit", 
			lastName:"Jain", 
			emailId: "ankit.jain@instawork.com", 
			role: 'admin', 
			status: 'active'
		},
		9876543210 : {
			firstName:"John", 
			lastName:"Doe", 
			emailId: "john.doe@instawork.com", 
			role: 'regular',
			status: 'active'
		}
	},
	error:{
		message: null
	},
	activeCount: 2,
	editingMember: null

}

export default state;