import React, { useState } from 'react';

export default function ToggleBox() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(prev => !prev)}
        style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
      >
        {isVisible ? 'Hide' : 'Show'} content
      </button>

      {isVisible && (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <p>This is the content you can toggle!</p>
        </div>
      )}
    </div>
  );
}
