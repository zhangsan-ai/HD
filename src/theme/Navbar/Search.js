import React from 'react';
import CustomSearch from '../../components/CustomSearch/CustomSearch.js';



export default function Search() {
    return (
        <div style={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            padding: '0 16px',
            width: '100%',
            maxWidth: 800
        }}>
            <CustomSearch />
        </div>
    );
}
