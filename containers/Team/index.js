import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import MemberListComponent from '../../components/MemberListComponent';
import './index.scss';


class Team extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		browserHistory.push('/add');
	}

	getActiveMembers(membersData){
		let membersList = [];
		for (const [k,v] of Object.entries(membersData)){
			if (membersData[k].status == 'active'){
				membersList.push({...v, phone: k})
			}
		}
		return membersList;
	}

	render(){
		const { actions, state} = this.props;
		const count = state.activeCount;
		const membersData = this.getActiveMembers(state.membersData);
		return(
			<div className="mainWrapper">
				<div className="mainWrapper__showTeamWrapper">
					<div className="mainWrapper__description">
						<div className="heading" onClick={this.handleClick}>
							{'+'}
						</div>
						<div>Team Members</div>
						<div className="subTitle">You have {count} team members.</div>
					</div>
					<div className="mainWrapper__memberList">
						<MemberListComponent membersData={membersData} actions={actions}/>
					</div>
				</div>
			</div>
		)		
	}



	componentDidMount(){
		console.log("Team didmount")
	}
}

export default connect(
	(state)=>({
		state: state
	}),
	(dispatch)=>({
		actions: bindActionCreators(Actions, dispatch)
	})
)(Team)