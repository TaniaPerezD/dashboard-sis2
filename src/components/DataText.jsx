import React from 'react';

const DataText = ({ data, colors }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            {data.map((entry, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '5px',
                            height: '5px',
                            backgroundColor: colors[index],
                            marginRight: '10px',
                            borderRadius: '50%',
                        }}
                    ></span>
                    <span style={{ fontWeight: 'bold' }}></span> {entry.name}<span style={{ fontWeight: 'bold' }}></span> {entry.value}
                </div>
            ))}
        </div>
    );
};

export default DataText;
