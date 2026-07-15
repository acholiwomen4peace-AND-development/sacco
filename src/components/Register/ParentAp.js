import React, { useState } from 'react';

import MyForm from './MyForm'
import Register from './Register'
// 3. The Parent Component holding the state
export default function ParentApp() {
  // Lifted state to hold the chosen value
  const [chosenFruit, setChosenFruit] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h2>React State Sharing Example</h2>
      
     
      <MyForm 
        selectedValue={chosenFruit} 
        onValueChange={setChosenFruit} 
      />
      
      <hr />
      
      {/* Pass the state value to the display component */}
      <Register value={chosenFruit} />
    </div>
  );
}
