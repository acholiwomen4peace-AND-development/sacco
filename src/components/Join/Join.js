import React from 'react';
import JoinContainer from './JoinContainer.css'

class Join extends React.Component{
	constructor(props){
		super(props);
		this.state={
			email: '',
			password:''
		}
	}
	onEmailChange=(event)=>{
		this.setState({email: event.target.value});
	}
	onPasswordChange=(event)=>{
		this.setState({password: event.target.value});
	}

	onButtonRegister = () =>{
		
			this.props.onRouteChange('Join');
	}
	render(){
	return(

<div>
<form>
<div>
  <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-30-l shadow-5  w-50 center">
			    <main className="pa4 black-80">
			  <div>
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend  className="f2 fw6 ph0 mh0 center">Join Us</legend>
			
			<div className="Join">
			       <div className="mt3 mv3">
				      <label className="db fw6 lh-copy f6">Full Name(s):</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue b--lightest-blue grow hover-blue w-100" 
				        type="text" 
				        name="name" 
				        id="name"
				        required
				        />
				      </div>
			       
			 
			      <div className="mt3 mv3">
				      <label className="db fw6 lh-copy f6">Telephone No:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-100" 
				        type="text" 
				        name="contact" 
				        id="contact" 
				        required
				        />
				      </div>
			     
			        <div className="mt3 mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email Address</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-100" 
				        type="email" 
				        name="email-address" 
				        id="email-address" 
				        required
				        />
				      </div>
			      

		</div>
		<div className="JoinReset">
			    <div >
			      <input 
			      className="mt3 pa2 ma2 b Button ph3 pv2 b Button input-reset ba b--black bg-transparent hover-bg-lightest-blue b--lightest-blue grow pointer f6 dibhover-blue" 
			      type="submit" 
			      value="Join" 
					onClick={this.onButtonRegister}
			      />
			    </div>

			    <div lassName="mt3">
					 <input 
				      className="mt3 pa2 ma2 b Button ph3 pv2 input-reset ba  bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue" 
				      type="reset"
				      />
				     </div>

				<div >
			      <input 
			      className="mt3 pa2 ma2 b Button ph3 pv2 b Button input-reset ba b--black bg-transparent hover-bg-lightest-blue b--lightest-blue grow pointer f6 dib hover-blue" 
			      type="submit" 
			      value="Back" 
					onClick={()=>{this.props.onRouteChange('Sign')}}
			      />
			    </div>

		</div>
		
			    </fieldset>
			  </div>
			</main>

 </article>
 </div>
 </form>
		</div>



		);
	}
}
export default Join;