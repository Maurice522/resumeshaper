import React, { useState } from 'react';
import '../styleSheet/createUpload.css'
import img3 from '../images/28.png'



export default function CreateUploadPopup({ onClose, onUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      onClose();
    }
  };

  return (
    <div className="homePpopup">
      <div className="popup-content">
      <h2 className='homeHeader'>
                    <img src={img3} className='popupImg' />
                    Welcome to Resume Builder</h2>
        <p className='homeSelectOption'>Select an Approach:</p>
        <button onClick={onClose} className="newResumeBtn">Create a Fresh Resume</button>
        <input className="homeSelectInput uploadResumeBtn" type="file" accept=".pdf" onChange={handleFileChange} />
        <button className='homePopupBtn  '  onClick={handleUpload}>Upload your Resume</button>
      </div>
    </div>
  );
};

