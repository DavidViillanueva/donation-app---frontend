import React from 'react';

import './LanguageSelector.css';


const LanguageSelector = ({ set }) => {


    return (
        <div className="lang-selector">
            
            <button 
                onClick = { () => set('es') }
                className = "btn-lang"
            >
                Es
            </button>
            <button 
                onClick = { () => set('en') }
                className = "btn-lang"
            >
                En
            </button>

        </div>
    )
}

export default LanguageSelector;
