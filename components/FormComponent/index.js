import React,{Component} from 'react';
import './index.scss';

export default class FormComponent extends Component{
	constructor(props){
		super(props)
	}

	render(){
		const {memberData, actionType, handleClick, changeUserData} = this.props;
		const errors = this.props.errors || {}
		return(
			<div className="formContainer">
				<p>Info</p>
				<input 
					className={`borderBox ${errors.firstName
	                ? 'borderBox__error'
	                : ''}`}
					type="text"
					placeholder="First Name"
					name="firstname"
					data-field="firstName"
					value={memberData && memberData.firstName}
					required
					onChange={changeUserData}
				/>
				<input 
					className={`borderBox ${errors.lastName
	                ? 'borderBox__error'
	                : ''}`}
					type="text"
					placeholder="Last Name"
					name="lastname"
					data-field="lastName"
					value={memberData && memberData.lastName}
					required
					onChange={changeUserData}
				/>
				<input 
					className={`borderBox ${errors.emailId
	                ? 'borderBox__error'
	                : ''}`}
					type="text"
					placeholder="Email ID"
					name="email"
					data-field="emailId"
					value={memberData && memberData.emailId}
					required
					onChange={changeUserData}
				/>
				<input 
					className={`borderBox ${errors.phone
	                ? 'borderBox__error'
	                : ''}`}
					type="number"
					placeholder="Phone No"
					name="phone"
					data-field="phone"
					value={memberData && memberData.phone}
					required
					onChange={changeUserData}
				/>

				<p>Role</p>
				<div className="roleContainer">
					<div className="roleWrapper">
						<label>
							<div className="roleText">Regular - Can't delete members</div>
							<input className="radioBtn" id="role" data-field="role" type="radio" name="role" value="regular" checked={memberData.role == 'regular'} onChange={changeUserData}/>
						</label>
					</div>
				</div>
				<div className="roleContainer">
					<div className="roleWrapper">
						<label>
							<div className="roleText">Admin - Can delete members</div>
							<input className="radioBtn" data-field="role" type="radio" name="role" value="admin" checked={memberData.role == 'admin'} onChange={changeUserData}/>
						</label>
					</div>
				</div>
				{actionType == 'edit' ?
					<div className="delBtn" value="del" data-action="delete" onClick={handleClick}>
						<div style={{margin:'auto'}}> Delete</div>
					</div>
				:null
				}	
				<div className="saveBtn" value="save" data-action="save" onClick={handleClick}><div style={{margin:'auto'}}> Save</div></div>
			</div>

		)
	}
}