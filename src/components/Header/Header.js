import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './logo.png'
class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	onButtonSave =()=>{
		this.props.onRouteChange('Save')
	}
	render(){
	if(this.props.isSignin){
	return (
	<div className='Header'>
	<div className='opts'>
		<p className='optionValue' onClick={()=>{this.props.onRouteChange('isSignin')}} >Home</p>
		<p className='optionValue' onClick={this.onButtonSave}>Saving</p>
		<p className='optionValue' >Loans</p>
		 <div className=" dropdow" >
		    
			<img src={logo} alt="logo" width='100%' height='40%' style={{cursor: 'pointer', 'border-radius': '50%', position:'relative'}}className='logo-C' /> 
	      	<div className="dropdownlis">
	     	<p className=" Listdow mt0 ma0 pa0" onClick={()=>{this.props.onRouteChange('Sign')}} >Sign Out</p><br></br>
	    
	     	<p className="Listdow mt0 ma0 mh-0 pa0" onClick={()=>{this.props.onRouteChange('ChangePassword')}} >Change Password</p>
	     	</div>
	  	</div>
	</div>
	</div>

	
		);
	}else {
	return(
	<nav style={{display: 'flex', justifyContent: 'flex-end'}}> 
			<p
			className= ' f4 ma2 pa2 underline link dim black pointer'
			onClick={()=>{this.props.onRouteChange('Sign')}}>Signin</p>

		<p className= ' f4 ma2 pa2 underline link dim black pointer'
		onClick={()=>{this.props.onRouteChange('Contact')}}>Contact</p>

		<p className= ' f4 ma2 pa2 underline link dim black pointer'
		onClick={()=>{this.props.onRouteChange('Projects')}}>Projects</p>

		<p className= ' f4 ma2 pa2 underline link dim black pointer'
		onClick={()=>{this.props.onRouteChange('Join')}}>Join</p>
		
	</nav>
	
	);
	}
	}
}
export default Header;