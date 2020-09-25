import React, { useState } from 'react';

const CopyLinkButton = ({ text }) => {

    const [copied, setCopied] = useState(false)

    const copyLinkToClipboard = () => {
        //debemos crear un campo de texto "flotante" para poder seleccionarlo 
        //y copiar su contenido con el execCommands
        const textField = document.createElement('textarea')
        textField.innerText = window.location.href;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        setCopied(true);
    }

    return (
        <button 
            className="secondary-button"
            onClick={ copyLinkToClipboard }
        >
            {copied ?
                <span>Copied!</span>
            :
                <span>Tell your Friends</span>
            }
        </button>
    )
}

export default CopyLinkButton;
