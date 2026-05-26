import React from 'react';
import './Regist.css'
import FileUploadPage from './FileUploadPage'
import Scroll3 from '../Scroll/Scroll3'
import SearchBox from './SearchBox'



const Register = () =>(
<div className="Register-Search">
<div className="Register pa2">
	 <form method='post'> 
	<div>
	  <article className="br3 ba center b--light-purple b--black mv1 w-100 w-100-m w-100-l shadow-5 w-80">
				    <main className="pa0 black-80">
				   
				  <div className=" w-100">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 center">
				      <legend  className="f2 fw6 ph0 mh0">Register a Member</legend>
				
		<div className='container1 w-90'>
				<div className="">
					<div className="mt3">
				      <label className="db fw6 lh-copy f6">ID:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="id" 
				        id="id" 
				        />
				      </div>

				    <div className="mt3">
				       Gender: <div className=""> <input 
				        type="radio" 
				        name="gender" 
				        />Male
				     
				        <input
				        type="radio" 
				        name="gender" 
				        />Female 
				      
				         <input
				        type="radio" 
				        name="gender" 
				        />Others
				        </div>
				    </div>


				    <div className="mt3">
				      <label className="db fw6 lh-copy f6">Contact No:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="contact" 
				        id="contact" 
				        />
				      </div>

				       
				       <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="password" 
				        name="password"
				        id="password" 
				        />
						</div>

			</div>

			<div className="">
					 <div className="mt3">
				      <label className="db fw6 lh-copy f6">Name:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="name" 
				        id="name" 
				        />
				      </div>

					
				    <div className="mt3 db fw6 lh-copy f6">
						Designition: 
						<select>
						<option value="Member">
				        Member
				        </option>
				     
				       <option value="Admin">
				         Admin
				        </option>
				        </select>
				     </div>

				     <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="email" 
				        name="email-address" 
				        id="email-address" 
				        required
				        />
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6">Joined:</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="Date" 
				        name="date"
				        id="date" 
				        />
				      </div>

				     



		</div>	
		<div className="">
					<div className="mt3" style={{ padding: '20px' }}>
				       <FileUploadPage />
				      </div>

				      <div lassName="mt3">
				      <label className="db fw6 lh-copy f6">Address:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="address" 
				        id="adress" 
				        />
				      </div>

				      <div lassName="mt3"> 
				      <label className="db fw6 lh-copy f6 pa2">NIN:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="nin" 
				        id="nin" 
				        />
				    </div>
				<div className="Register-Reset">
				     <div className="mt3 db fw6 lh-copy f6">
				      <input 
				      className=" b Button ph3  pv2 input-reset ba b--black bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue" 
				      type="submit" 
				      value="Register" 
				      />
				      </div>

				      <div className="mt3 db fw6 lh-copy f6">
				      <input 
				      className="ma2  mt0 b Button ph3  pv2 input-reset ba b--black bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue" 
				      type="submit" 
				      value="Update" 
				      />
				      </div>

				      <div className="mt3 db fw6 lh-copy f6">
				      <input 
				      className="b Button ph3  pv2 input-reset ba b--black bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue" 
				      type="submit" 
				      value="Delete" 
				      />
				      </div>
				    
				      <div className="mt3">
					 <input 
				      className="b Button ph3 pv2 input-reset ba b--black bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue" 
				      type="reset"
				      />
				     </div>
				</div>
		</div>

			</div>     	     
		  
				    
				
			
				    </fieldset>
				   
				   
				  </div>
				 
				</main>

	 </article>
			</div>
	</form>
<div>
<SearchBox />
</div>	
<div className="Register-Search br3 pa1 mw-100">

	
<Scroll3 className="br3 br3 shadow-5 mw-100">

</Scroll3>

</div>
	</div>
	</div>
		);

export default Register;
