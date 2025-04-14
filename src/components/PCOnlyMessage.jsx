import React from 'react';

const PCOnlyMessage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '1rem',
    }}>
      <p style={{ fontSize: '1.2rem', color: 'white' }}>
        Sorry, this is only viewable on a PC.
      </p>
    </div>
  );
};

export default PCOnlyMessage;
