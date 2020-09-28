import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Proptypes from 'prop-types';

import ProgressBar from './components/materialComponents/ProgressBar';
import FormDonation from './components/interactiveComponents/FormDonation';
import CopyLinkButton from './components/interactiveComponents/CopyLinkButton';
import BalloonText from './components/informativeComponents/BalloonText';
import DescribeCause from './components/informativeComponents/DescribeCause';
import AlertNegSum from './components/informativeComponents/AlertNegSum';

import useCounter from './hooks/useCounter';
import getDaysLeft from './helpers/getDaysLeft';
import firebaseDB from './firebase/firebase';

import './DonationApp.css';


const DonationApp = ({ expireDate = new Date(), cause = '', amount = 0, amountCollected = 0, doners = 0, describe='', lang }) => {

    const { t , i18n} = useTranslation();
    

    //daysLeft indicate the countdown of days before the cause ending
    const daysLeft = getDaysLeft( expireDate );
    //actualAmount indicate the amount collected until now
    const [actualAmount, setactualAmount] = useState( amountCollected );
    //donationValue indicate the value of the donation
    const [donationValue, setDonationValue] = useState( 0 )
    //negativeDonation flag to determinate a negative donation alert
    const [negativeDonation, setNegativeDonation] = useState(false)
    //descriptionOpen flag to show or not the description of the cause
    const [descriptionOpen, setdescriptionOpen] = useState(false)
    //counterDoners to show an increment the counter of doners
    const { counter: counterDoners, increment: incrementDoners } = useCounter( doners );
    //dbData to containt the data to update in every donation
    const [dbData, setdbData] = useState({
        amountCollected: actualAmount,
        doners: counterDoners
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(donationValue > 0){
            const messageConfirm = `Are you sure you want to donate ${donationValue} to the ${cause} cause?`;
            if( window.confirm(messageConfirm) ){
                //user acept the donation
                setactualAmount( actualAmount + parseInt (donationValue) );
                incrementDoners();
                resetInput();
                setdbData({
                    amountCollected: actualAmount + parseInt (donationValue),
                    doners: counterDoners + 1 ,
                })
            }else{
                //user denied the donation
                resetInput();
            }
        }else{
            setNegativeDonation(true);
        }
    }

    const handleChange = ({target}) => {
        setDonationValue( target.value );
    };

    const resetInput = () => {
        setDonationValue( 0 );
    }

    useEffect(() => {
        firebaseDB.database().ref('donation').child('amountCollected').set( dbData.amountCollected );
        firebaseDB.database().ref('/donation/').child('doners').set( dbData.doners );
    }, [dbData])

    useEffect(() => {
        i18n.changeLanguage(lang);
    },[lang,i18n])

    return (
        <div className="form-donation">
            
            <BalloonText 
                amount = { amount }
                actualAmount = { actualAmount }
                lang = { lang }
            />

            <div className="data-block">
                
                <h2>{cause}</h2>

                <ProgressBar amount={ amount } actualAmount={ actualAmount }/>
                {negativeDonation &&
                    <AlertNegSum />
                }

                <h4>{t( 'daysLeft' , { days: daysLeft })}</h4>
                
                <p>
                    {t('doners',{ counterDoners: counterDoners })}          
                </p>

                <FormDonation 
                    handleSubmit = { handleSubmit }
                    donationValue = { donationValue }
                    handleChange = { handleChange }
                    lang = { lang }
                />

                <small
                    onClick={() => setdescriptionOpen(!descriptionOpen) }
                    href='#'
                >
                    {t('why',{ amount: donationValue })}
                </small>

                <div className="row bottom">

                    <CopyLinkButton 
                        text = { () => {
                            return (window.location.href)    
                        }}
                        lang = { lang }
                    />
                    
                    <button className="secondary-button">
                        { t('buttons.toPage') }
                    </button>
                </div>
            </div>

            
            <DescribeCause 
                open = { descriptionOpen }
                describe = { describe }
            />
        </div>
    )
};

DonationApp.propTypes = {
    cause: Proptypes.string,

}

export default DonationApp;
