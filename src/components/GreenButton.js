import React from 'react';
import './GreenButton.css';

export function GreenButton({ title, onPress, disabled }) {
  return (
    <button 
      className="green-button" 
      onClick={onPress} 
      disabled={disabled}
    >
      {title}
    </button>
  );
}

