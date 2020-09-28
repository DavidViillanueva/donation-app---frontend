import React, { useState,useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CopyLinkButton = ({ text, lang}) => {

    const [copied, setCopied] = useState(false)

    const { t, i18n } = useTranslation();
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
    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang,i18n])

    return (
        <button 
            className="secondary-button"
            onClick={ copyLinkToClipboard }
        >
            {copied ?
                <span>{ t('buttons.copied') }</span>
            :
                <span>{ t('buttons.share') }</span>
            }
        </button>
    )
}

export default CopyLinkButton;
