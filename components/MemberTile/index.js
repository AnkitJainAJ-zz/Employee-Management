import React,{Component} from 'react';
import './index.scss';
import {browserHistory} from 'react-router';

export default class MemberTile extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		// this.props.actions.markMemberToEdit(memberData);
		let queryParam=this.props.memberData.phone;
		browserHistory.push('/edit?phone='+ queryParam);
	}

	render(){
		const {memberData, actions} = this.props;
		return(
			<div className="memberTile" onClick={this.handleClick}>
				<div>{memberData.firstName} {memberData.lastName} {memberData.role == 'admin'? '(Admin)': null}</div>
				<div> {memberData.phone}</div>
				<div> {memberData.emailId} </div>
			</div>


		)
	}
}