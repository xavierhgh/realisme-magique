// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 9999
    }}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
