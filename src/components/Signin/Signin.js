import React, {Component} from 'react';
import './Signin.css'
import logo from './logo.jpg'
import Cellphone from '../Contact/Cellphone.JPG'
import LocationIcon from '../Contact/LocationIcon'

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p>&copy; {currentYear}.All rights reserved.</p>
  );
};


class Signin extends Component{
	
	constructor(props){
		super(props)
		this.state={
			email:'',
			password:'',
			users:{
				id: '',
				name:'',
				entry: '',
			}
		}

	}
	onEmailChange=(event) =>{
		this.setState({email: event.target.value})
	}

	onPasswordChange=(event) =>{
		this.setState({password: event.target.value})
	}

	render(){
		
	return (
	<div className="flx-container">
		<div className="flx-container1 mv0 ">

			<div className="flx-container1-1">
					<div className='flx-container1-1-1'>
					</div>
							
								<div className="flx-container1-1-2">
								<h3><em>Some of the Services Offered by our Management System;</em></h3>
								<ul>
								<li>Membership Registration & Management</li>
								<li>Savings & Loans Management</li>
								<li>Dashboard</li>
								</ul>
								</div>

					<div className="flx-container1-1-3 center">
					<h5><em>"Hope for a better future"</em></h5>
					</div>
			</div>

			<div className="flx-container1-2 ">
			 <article className="br3 ba dark-gray b--black-10 w-100-m w-50-l shadow-5 center">
				  
				    <main className="pa4 black-80">
				  <img className="center" src={logo} alt="logo" width='30%' height='15%' style={{'border-radius': '50%', 'padding-bottom': '2%'}} /> 
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend  className="f2 fw6 ph0 mh0 vsla">Community Peace Agency VSLA </legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Tel. No OR Email Address</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow br2 b--light-blue hover-blue w-100" 
				        type="email"  
				        name="email-address" 
				        id="email-address" 
				        onChange={this.onEmailChange}
				       
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow br2 b--light-blue  hover-blue w-100" 
				        type="password" 
				        name="password"
				        id="password"
				        onChange={this.onPasswordChange} 
				        
				        />
				      </div>
				      <label className="pa0 ma0 lh-copy sf6 pointer"><input type="checkbox" /> Remember me</label>
				    </fieldset>
				    <div >
				      <input 
				        onClick={()=>{this.props.onRouteChange('isSignin')}}
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center hover-blue" 
				      type="submit" 
				      value="Sign in" 
						
				      />
				    </div>
				    <div className="lh-copy mt3">
				      <p className="f6 link dim black db pointer"
				      onClick={()=>{this.props.onRouteChange('Join')}}
				      >Join</p>
				      <a href="#0" className="f6 link dim black db hover-blue" onClick={()=>{this.props.onRouteChange('ForgotPassword')}}>Forgot your password?</a>
				    </div>
				  </div>
				</main>

	 </article>
			</div>

		</div>
			
	
		<div className="flx-container2 ">
			<p><strong><em>Developer <span>|</span> {<img src={Cellphone} alt="Tel:" style={{width:'15px', height:'15px', 'borderRadius': '50%'}} />} +256(0) 782 005 826  {<LocationIcon size='1em' />} Patongo, Agago District {<Copyright />}</em></strong></p>
		</div>
	</div>					
		);
	}
}
export default Signin;