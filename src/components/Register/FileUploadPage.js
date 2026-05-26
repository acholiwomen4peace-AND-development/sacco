import React, { useState } from 'react';
import axios from 'axios';


function FileUploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
   
    try {

      // Replace with your actual upload API endpoint
      const response = await axios.post('http://localhost:4000/photo', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
      const result = await response.json();
      console.log('Success:', result);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input type="file" onChange={handleFileChange}  />
      <button className="hover-blue ba hover-bg-lightest-blue b--lightest-blue" onClick={handleUpload} style={{ marginLeft: '10px' }}>

        Attach Profile Photo
     
      </button>

    </div>
  );
}

export default FileUploadPage;
