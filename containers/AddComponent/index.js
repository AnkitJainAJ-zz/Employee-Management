import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import FormComponent from '../../components/FormComponent';
import {validateDetail} from '../../utils/helper';
// import './index.scss';

class AddComponent extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.changeUserData = this.changeUserData.bind(this);
		this.state={
			errors:{
				firstName: null,
				lastName:null,
				emailId: null,
				phone: null
			},
			member:{role: 'regular'}
		}

	}

	goBack(){
		browserHistory.goBack();
	}

	changeUserData(e){
		let data=this.state.member;
		switch(e.currentTarget.dataset.field){
			case "firstName":
				data.firstName = e.currentTarget.value;
				break;
			case "lastName":
				data.lastName = e.currentTarget.value;
				break;
			case "phone":
				data.phone = e.currentTarget.value;
				break;
			case "emailId":
				data.emailId = e.currentTarget.value;
				break;
			case "role":
				data.role = e.currentTarget.value;
				break;
		}
		this.setState({
			member: data
		})
	}

	handleClick(e){
		console.log(e);
		let actionType=e.currentTarget.dataset.action || 'save';
		let errors = validateDetail(this.state.member, this.props.state);
		if((errors.firstName || errors.lastName || errors.phone || errors.emailId)){
			this.setState({
				errors:errors
			})
		}
		else{
			this.props.actions.addMember(this.state.member);
			this.goBack();
		}
	}


	render(){
		
		return(
			<div className="mainWrapper">
				<div className="mainWrapper__showTeamWrapper">
					<div className="mainWrapper__description">
						<div className="heading" onClick={this.goBack}>
							{'x'}
						</div>
						<div>Add a Team Member</div>
						<div className="subTitle">Set email, location and role</div>
					</div>
					<FormComponent 
						handleClick={this.handleClick}
						goBack={this.goBack}
						errors={this.state.errors}
						memberData={this.state.member}
						changeUserData={this.changeUserData}
					/>
				</div>
			</div>	
		)
	}
}

export default connect(
	(state)=>({
		state: state
	}),
	(dispatch)=>({
		actions: bindActionCreators(Actions, dispatch)
	})
)(AddComponent)