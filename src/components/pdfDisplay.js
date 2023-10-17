import React, { useState } from 'react';

function PdfDisplay() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          placeholder="Enter text"
          onChange={handleInputChange}
        />
      </div>
      <div className="output-container">
        {inputText && <p>{inputText}</p>}
      </div>
    </div>
  );
}

export default PdfDisplay;
