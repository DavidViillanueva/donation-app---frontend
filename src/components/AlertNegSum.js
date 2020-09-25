import React from 'react';

import './AlertNegSum.css';
const AlertNegSum = () => {
    return (
        <>
            <div className="row alert">
                <p className="alertText">You can't donate a negative value</p>
            </div>
        </>
    )
}

export default AlertNegSum;
