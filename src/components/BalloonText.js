import React from 'react';

import './BallonText.css';

const BalloonText = ({ amount = 0,actualAmount = 0 }) => {
    return (
        <div className="text-alert">
            <div className="indicator">
                <span> ${ amount-actualAmount } still needed for this project!</span>
            </div>
            <div className="pointer"></div>
        </div>
    )
};

export default BalloonText;
