import React, { useState } from 'react';

export default function ImageUploader() {
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
      const response = await fetch('http://localhost:5000/api/upload', {
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
  <input className="center mt3 pa0" type="file" accept="image/*" onChange={handleFileChange} />

  </div>
  );
}