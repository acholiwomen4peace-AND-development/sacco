import React, {useState } from 'react';
import axios from 'axios';

import './Regist.css'
import FileUploadPage from './FileUploadPage'
import Scroll3 from '../Scroll/Scroll3'
import SearchBox from './SearchBox'
//import ImageUploadPage from './ImageUploadPage'



//import Selector from './Selector'
//import MyForm from './MyForm'


{/*Frontend Setup — React File Upload Form
Now that the backend is ready, let’s build the React 
frontend that allows users to select and upload files to our Node.js + Multer API.

In this section, we’ll:

Create a React project

Install Axios

Build a file upload component

Send files using FormData

Display upload status and errors

1. Create the React Project
Using Vite (recommended for modern React apps):

npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev
Your app will run at:

http://localhost:5173
2. Install Axios
Axios makes it easy to send multipart/form-data requests.

npm install axios
3. Create the File Upload Component
Create a new file:

src/components/FileUpload.jsx*/}

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [SelectedFile, setSelectedFile] = useState('');
   const [previewUrl, setPreviewUrl] = useState('');
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
  	 const fileData = event.target.files[0];
    if (fileData) {
      setSelectedFile(fileData);
      setPreviewUrl(URL.createObjectURL(fileData)); // Creates temporary preview URL
    }
  };
 
  const handleUpload = async () => {
    if (!SelectedFile) {
      setMessage('Please select a file');
      return;
    }
   

    const formData = new FormData();
    formData.append('file', SelectedFile);

    try {
      setUploading(true);
      setMessage('');

      const response = await axios.post(
        'http://localhost:5000/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      if (error.response?.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('File upload failed');
      }
    } finally {
      setUploading(false);
    }
  };

  return (

    <div style={{ maxWidth: 400, margin: '0.5rem auto'}}>
    <form>
      <h4>ProfilePhoto:</h4>
     <div  className="br3 ba dark-gray b--black-5 shadow-3">
     
      <input className="pa0" type="file"  onChange={handleFileChange} />
      <img className="center pa0 mt0" src={previewUrl} alt="Selected Preview" style={{width: '130px', height:'120px', cursor: 'pointer', 'border-radius':'8px'}}/> 
   
   <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Register'}
      </button>
     
    </div>
      {message && <p style={{color:'red'}}>{message}{'!'}</p>}
   </form>
    </div>

  );
};




{/*
How File Upload Works in React
Key Points
<input type="file" /> allows file selection

FormData is required for multipart/form-data

Axios automatically handles binary file transfer

The field name must match Multer’s config:

 
upload.single('file')
*/}




function Register(){
  const [status, setStatus] = useState('');
  const [SelectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [formData, setFormData] = useState({
	
		id:'',
 		regname:'',
 		gender:'',
 		contact:'',
 		email:'',
 		password:'',
 		joined:'',
 		address:'',
 		nin:'',
 		profilePhoto:'',
		designition:''
});


const handleChange=(e)=>{
	setFormData({ ...formData, [e.target.name]: e.target.value})
}

const handleFileChange=(e)=>{
  const fileInputData = e.target.files[0];
    if (fileInputData) {
      setSelectedFile(SelectedFile);
      setPreviewUrl(URL.createObjectURL(SelectedFile)); // Creates temporary preview URL
    }     
	
};



const handleSubmit=async(event)=>{
	event.preventDefault();

	if(!SelectedFile){
		setMessage('Please select Profile Photo!');
	setStatus('Please select a file!');
		return;
	}

const data = new FormData();
	data.append('id', formData.id);
	data.append('regname', formData.regname);
	data.append('gender', formData.gender);
	data.append('contact', formData.contact);
	data.append('email', formData.email);
	data.append('password', formData.password);
	data.append('joined', formData.joined);
	data.append('address', formData.address);
	data.append('nin', formData.nin);
	data.append('designition', formData.designition);
	if(SelectedFile){
		data.append('profilePhoto', SelectedFile);
	} 

	setStatus('Uploading...')

	try {
	 setUploading(true);
      setMessage('');
		const response =await fetch('http://localhost:5000/register', {
		method:'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(formData),
	});
	if(!response.ok){
		throw new Error(`Backend error: ${response.status}`);
		}

	const result = await response.json();
	console.log('Success:', result);
	}  finally {
		alert("Registered Successfully!")
		setMessage('Please attach Profile Photo!!!');
		setStatus('Please attach Profile Photo!!!')
		setUploading(false);

		
	}	
	
		
	
};

	return (

<div className="Register-Search">

<div className="Register pa2">
	 <form method='POST'> 
	<div>
	  <article className="br3 ba center b--light-purple b--black mv1 w-100 w-100-m w-100-l shadow-5 w-80">
				    <main className="pa0 black-80" style={{width:'100%', height:'100%'}}>
				   
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
				       value={formData.id}
				    onChange={handleChange}
				        />
				      </div>

				    <div className="mt3">
				       Gender: <div className=""> <input 
				        type="radio" 
				        name="gender" 
				       value='Male'
				        checked={formData.gender==='Male'}
				    onChange={handleChange}
				        />Male
				     
				        <input
				        type="radio" 
				        name="gender" 
				     value='Female'
				        checked={formData.gender==='Female'}
				    onChange={handleChange}
				        />Female 
				      
				         <input
				        type="radio" 
				        name="gender"
				      value='Others'
				   checked={formData.gender==='Others'}
				   onChange={handleChange}
				        />Others
				        </div>
				    </div>


				    <div className="mt3">
				      <label className="db fw6 lh-copy f6">Contact No:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="contact" 
				        id="contact" 
				     value={formData.contact}
				    onChange={handleChange}
				        />
				      </div>

				       
				       <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="password" 
				        name="password"
				        id="password"
				    value={formData.password}
				     onChange={handleChange}
				        />
						</div>

			</div>

			<div className="">
					 <div className="mt3">
				      <label className="db fw6 lh-copy f6">Name:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="regname" 
				        id="regname" 
				      value={formData.regname}
				    onChange={handleChange}
				        />
				      </div>

					
				    <div className="mt3 db fw6 lh-copy f6">
				     <label className="db fw6 lh-copy f6">User Title:</label>
					<select
					name="designition"
				value={formData.designition}
					 onChange={handleChange}
					>
					<option value="" disabled>Select.....</option>
       				<option value="Member" >Member</option>
       				 <option value="" disabled>Other Admin</option>
       				 <option value="" disabled>Secretary</option>
       				  <option value="" disabled>Treasurer</option>
       				   <option value="" disabled>Chairperson</option>
       				 </select>

				     </div>

				     <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="email" 
				        name="email" 
				        id="email-address" 
				        required
				     value={formData.email}
				     onChange={handleChange}
				        />
				      </div>

				      <div className="mt3">
				        <label className="db fw6 lh-copy f6">Joined:</label>
				        <input className="b pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="Date" 
				        name="joined"
				        id="date" 
				     value={formData.joined}
				     onChange={handleChange}
				        />
				      </div>

				     



		</div>	
		<div className="">
					<div className="mt03">
				      
				       <FileUpload />
					   {message && <p style={{color:'red'}}>{message}{'!'}</p>}				 
				     </div>

				      <div lassName="mt3">
				      <label className="db fw6 lh-copy f6">Address:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="address" 
				        id="adress" 
				      value={formData.address}
				    onChange={handleChange}
				        />
				      </div>

				      <div lassName="mt3"> 
				      <label className="db fw6 lh-copy f6 pa2">NIN:</label>
				        <input className="pa2 input-reset ba bg-transparent hover-bg-lightest-blue grow b--lightest-blue hover-blue w-80" 
				        type="text" 
				        name="nin" 
				        id="nin" 
				     value={formData.nin}
				     onChange={handleChange}
				        />
				    </div>
				<div className="Register-Reset">
				   
				     <div className="mt3 db fw6 lh-copy f6">
				      <button 
				        className="ma2  mt0 b button ph3  pv2 input-reset ba b--black bg-transparent hover-bg-lightest-blue grow b--lightest-blue pointer f6 dib hover-blue" 
				      	type="submit" 
				      	onClick={handleSubmit} disabled={uploading}>
        				{uploading ? 'Registering...' : 'Upload'}
      					</button>
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
 {status && <p style={{margin:'15px', fontweight:'bold', color:'red'}}>{status}</p>}
	
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

	}
export default Register;
