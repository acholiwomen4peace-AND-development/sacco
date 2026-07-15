import { React, Component, useState } from 'react';
import '../Register/Register.css'
import Scroll2 from '../Scroll/Scroll2'
import { NavLink } from 'react-router-dom'
import './MenuItems.css'


function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle local file selection and generate live preview URL
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Creates temporary preview URL
    }
  };

  // Package the image and send it over HTTP to the backend API
  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setStatusMessage('Please select an image first!');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile); // 'image' matches the backend field key

    try {
      setStatusMessage('Uploading...');
      const response = await fetch('http://localhost:5000/photo', {
        method: 'POST',
        
        body: formData, // Automatically sets 'multipart/form-data' headers
      });

      if (response.ok) {
        const data = await response.json();
        setStatusMessage('Success! Image saved to database.');
        console.log('Saved Image Path/Data:', data);
      } else {
        setStatusMessage('Upload failed. Server error.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setStatusMessage('Network connection failure.');
    }
  };

return (
	<div>
<form >	
	<img className="center mt0" src={previewUrl} alt="Selected Preview" style={{width: '150px', height:'140px', cursor: 'pointer', 'border-radius':'8px'}}/> 
		
	<input className="center mt0" type="file" accept="image/*" onChange={handleFileChange} />
</form>
	</div>
	
	);
}



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
<div className="Menu" style={{background: '#1d4ed8', height: '100%', width:'100%'}}>

	<div className="mt0 pa0 ma0 Menu" style={{background: '#f2f2f2', padding: '2%', height: '40%', width:'100%'}}>
	<ImageUploader />	

		<div>
                 
			<p></p>
			<p></p>
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