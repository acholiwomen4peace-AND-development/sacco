import React from 'react'
import ForgotPass from './ForgotPass.css'

class ChangePassword extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){


	return(
		<div>
 <form> 
 <div>
   <article className="ForgotPassContainer br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-30-l shadow-5  mw-10 center">
			    <main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend  className="f2 fw6 ph0 mh0 center">Change Password</legend>
			<div className="PasswReset">
			       <div className="mt3 mv3">
				      <label className="db fw6 lh-copy f6">Tel. No/ Email Address:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue b--lightest-blue grow hover-blue w-100" 
				        type="text" 
				        name="name" 
				        id="name" 
				        />
				      </div>
			       
			 
			

			         <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">New Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-100" 
				        type="password" 
				        name="password"
				        id="password" 
				        />
						</div>

						 <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Confirm New Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-100" 
				        type="password" 
				        name="password"
				        id="password" 
				        />
						</div>
			      

			      </div>
		<div className="PasswordReset">
			    <div >
			      <input 
			      className="mt3 pa2 ma2 b Button ph3 pv2 b Buttoninput-reset ba b--black bg-transparent hover-bg-lightest-blue b--lightest-blue grow pointer f6 dib hover-blue" 
			      type="submit" 
			      value="Change" 
			      />
			    </div>

			    <div className="mt3">
					 <input 
				      className="b Button ph3 pv2 input-reset ba b--black bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue " 
				      type="reset"
				      />
				     </div>
				<div >
			      <input  onClick={()=>{this.props.onRouteChange('isSignin')}}
			      className="mt3 pa2 ma2 b Button ph3 pv2 b Buttoninput-reset ba b--black bg-transparent hover-bg-lightest-blue b--lightest-blue grow pointer f6 dib hover-blue" 
			      type="Submit" 
			      value="Back" 
			     
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

		)
	} 
}

export default ChangePassword;