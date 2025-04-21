import React from 'react';

const MapaDepartamentos = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <iframe
        src="http://localhost:3000/public/dashboard/166209f7-57f0-47f6-ba07-abb381707b3a"
        frameBorder="0"
        width="100%"
        height="100%"
        allowTransparency
        title="Metabase Dashboard"
      />
    </div>
  );
};

export default MapaDepartamentos;
