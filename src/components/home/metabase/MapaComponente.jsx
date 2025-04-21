import React from 'react';

const MapaDepartamentos = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <iframe
        src="http://localhost:3000/public/dashboard/0769bf67-5cc8-40ec-ab5b-871628bcf8c3"
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
