import React, { useEffect, useState } from 'react';
import './UploadForm.css';

function UploadForm({ selectedModel }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [response, setResponse] = useState('');
  const [preview, setPreview] = useState(null);



  const handleSubmit = async () => {
    if (!selectedModel || !selectedFile) {
      alert('Please select both model and image.');
      return;
    }

    const formData = new FormData();
    formData.append('model', selectedModel);
    formData.append('file', selectedFile);

    try {
      const res = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setResponse(data.prediction);
    } catch (error) {
      setResponse('Error occurred');
      console.error(error);
    }
  };


  return (
    <>
    <div className="upload-form">
      <div className="input-options">
        <div className='file-input'>
          <input
            type="file"
            className="file-input-btn"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button className='input-btn'>Upload File</button>
          <p className='file-name'>{selectedFile ? selectedFile.name : 'No file selected'}</p>
        </div>
      
      <div className="button-container">
      <button className="show-image" onClick={() => { 
        if (selectedFile) {
          setPreview(URL.createObjectURL(selectedFile));
        }
      }}>Show Image</button>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      </div>
      <div className="image-placeholder">
      {preview && (
          <img src={preview} alt="Preview" />
        )}

      </div>
      
      </div>

      <div className="result">
        {response && (
          <div className="prediction-result">
            <p>Prediction: {response}</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default UploadForm;
