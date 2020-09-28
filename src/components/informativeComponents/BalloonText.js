import React,{ useEffect }  from 'react';
import { useTranslation } from 'react-i18next'


import './BallonText.css';

const BalloonText = ({ amount = 0,actualAmount = 0 ,lang }) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang,i18n])

    return (
        <div className="text-alert">
            <div className="indicator">
            <span> {t('balloon',{restantAmount: amount-actualAmount })}</span>
            </div>
            <div className="pointer"></div>
        </div>
    )
};

export default BalloonText;
