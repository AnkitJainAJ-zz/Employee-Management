import React,{Component} from 'react';
import MemberTile from '../MemberTile';

export default class MemberListComponent extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const {membersData, actions} = this.props;
		return(
			<div>
				{membersData.map((item, index)=>{
					return (
						<MemberTile memberData={item} key={index} actions={actions}/>
					)
				})}
			</div>

		)
	}
}