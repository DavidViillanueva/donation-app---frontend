import React,{ useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import './FormDonation.css';

const FormDonation = ({ handleSubmit, donationValue, handleChange, lang }) => {
    const { t, i18n } = useTranslation();
    
    useEffect( () => {
        i18n.changeLanguage(lang)
    },[ lang ,i18n])

    return (
        <form onSubmit={ (e) => handleSubmit(e) } className="row">
            <input 
                type="number"
                name = "donationValue"
                onChange={(e) => handleChange(e) }
                onClick= { (e) => e.target.value = ''}
                value={ donationValue }
            />
            <button 
                type="submit"
            >
                { t('buttons.giveNow') }
            </button>
        </form>
    )
}

export default FormDonation;
