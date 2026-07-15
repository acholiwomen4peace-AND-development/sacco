import React, { useState } from 'react';
import Select from 'react-select'; //



export default function MyForm({ onDesigChange }) {
  // 2. Initialize state to hold the entire selected object
  const [selectedValue, setSelectedValue] = useState('');

  // 3. Handle submission to the backend
  const handleSubmit = async (event) => {
 const newValue=event.target.value;
setSelectedValue(newValue);
   


{/*
    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({desig: newValue})

      });
      
      if (response.ok) {
        console.log('Successfully sent to backend!');
        console.log(newValue)
        this.props.onDesigChange(newValue)
      
        
      }
    } catch (error) {
      console.error('Error sending data:', error);
     
    }
  }; 
    */}
  }
  return (
    
    <div>
      <label>Choose a Framework:</label>
      
      {/* 4. Bind value and onChange to your state */}
      <select style={{width:'100px'}}
        id="dropdown"
        name="users"
        value={selectedValue}
        onChange={handleSubmit}
       >
       <option value="" disabled>Select....</option>
       <option value="member" >Member</option>
        <option value="admin">Admin</option>
      </select>
   
    </div>
   
  );
}
