// src/components/ColorPicker.jsx
import React, { useState } from 'react';

export default function ColorPicker() {
  const [color, setColor] = useState('#ff0000');

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <label>
        Pick a color: 
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          style={{ marginLeft: '0.5rem' }} 
        />
      </label>

      <div style={{
        marginTop: '1rem',
        width: '100px',
        height: '50px',
        backgroundColor: color,
        border: '1px solid #ccc'
      }} />
      <p style={{ marginTop: '0.5rem' }}>Selected color: {color}</p>
    </div>
  );
}
