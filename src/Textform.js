import React from 'react';

export default function Textform() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Enter your Query here!</h1>
      <div style={textareaContainerStyle}>
        <textarea
          style={textareaStyle}
          name="form-control"
          id="myBox"
          rows="10"
          placeholder="Type your text here..."
        ></textarea>
      </div>
      <button style={buttonStyle} className='btn btn-primary'>
        Convert to UpperCase
      </button>
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '30px',
  backgroundColor: '#f5f5f5',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  color: '#333',
  marginBottom: '20px',
  fontSize: '24px',
};

const textareaContainerStyle = {
  marginBottom: '20px',
};

const textareaStyle = {
  width: '100%',
  padding: '15px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '15px 30px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};
