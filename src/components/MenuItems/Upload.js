
import { useState } from 'react';
import axios from 'axios';
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
\
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

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
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>File Upload</h2>

      <input type="file" onChange={handleFileChange} />

      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;


{/*
How File Upload Works in React
Key Points
<input type="file" /> allows file selection

FormData is required for multipart/form-data

Axios automatically handles binary file transfer

The field name must match Multer’s config:

 
upload.single('file')
*/}