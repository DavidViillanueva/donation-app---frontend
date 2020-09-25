import React from 'react';

import './DescribeCause.css';

const DescribeCause = ({ open , describe}) => {
    let className = 'description';
    if(open){
        className = 'description open'
    }

    return (
        <div className={className}>
                <p className='p-description'>{ describe }</p>
        </div>
    )
}

export default DescribeCause
