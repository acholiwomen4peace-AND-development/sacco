import {React, Component} from 'react';
import '../Register/Register.css'
import Scroll2 from '../Scroll/Scroll2'
import { NavLink } from 'react-router-dom'
import mike from './mike.jpg'
import './MenuItems.css'
class MenuItems extends Component{
constructor(props){
	super(props);
	this.state={

	}
}
onButtonSave=()=>{
	this.props.onRouteChange('Save');
}
onButtonRegister=()=>{
	this.props.onRouteChange('isSignin');
}
render(){
	return(
<div className="Menu" style={{background: '#1d4ed8'}}>

	<div className="mt0 pa0 ma0" style={{background: '#f2f2f2', margin: '0px', padding: '10px', height: '30%', width:'100%'}}>
		<img className="center mt0" src={mike} alt= "" style={{width: '50%', height:'60%', cursor: 'pointer', 'border-radius': '50%'}}/> 
		<div>
			<p>OKIDI MICHAEL</p>
			<p>0779943327</p>
		</div>
	</div>
	
		
<div>
	<ul>
		<li>
		<div className='dropdown'>
		<select className= "selec"><option value="Member"><a href="hg"> Membership</a></option></select>
		<div className="dropdownlist">
			<li onClick={this.onButtonRegister}>Registration</li>
			<li>Update</li>
			<li>Deletion</li>
			<li>Registration List</li>
		</div>
		</div>
		</li>

		<li>
		<div className='dropdown'> 	
		<select><option value="Savings"><a href="mnm">Savings</a></option></select>
		<div className="dropdownlist">
			 <li onClick={this.onButtonSave}>Savings</li>
			 <li>Update Saving Record</li>
			 <li>Remove Saving Record</li>
			 <li>View Savings Records</li>
		</div>
		</div>
		</li>

		<li>
		
		<div className='dropdown'> 	 	
		<select><option value="Loans"><a href="nnb">Loans</a></option></select>
		<div className="dropdownlist">
		<Scroll2>
			<li>Request for a Loan</li>
			<li>Pay a Loan</li>
			<li>Approve Loan Request</li>
			<li>Approvers Total No</li>
			<li>Loan Balances</li>
			<li>Interests on Loans</li>
			<li>Loan Record</li>
		</Scroll2>
		</div>
		</div>
		</li>
	</ul>
	</div> 
				
</div>
);
}
}
export default MenuItems;