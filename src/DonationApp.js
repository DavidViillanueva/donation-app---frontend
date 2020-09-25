import React, { useState } from 'react';
import ProgressBar from './components/materialComponents/ProgressBar';
import BalloonText from './components/BalloonText';
import FormDonation from './components/FormDonation';
import DescribeCause from './components/DescribeCause';
import CopyLinkButton from './components/CopyLinkButton';

import useCounter from './hooks/useCounter';
import getDaysLeft from './helpers/getDaysLeft';

import './DonationApp.css';
import AlertNegSum from './components/AlertNegSum';

const DonationApp = ({ expireDate = new Date(), cause = '', amount = 0, doners = 0, describe='' }) => {

    //daysLeft indicate the countdown of days before the cause ending
    const daysLeft = getDaysLeft( expireDate );
    //actualAmount indicate the amount collected until now
    const [actualAmount, setactualAmount] = useState( 0 );
    //donationValue indicate the value of the donation
    const [donationValue, setDonationValue] = useState( 0 )
    //negativeDonation flag to determinate a negative donation alert
    const [negativeDonation, setNegativeDonation] = useState(false)
    //descriptionOpen flag to show or not the description of the cause
    const [descriptionOpen, setdescriptionOpen] = useState(false)
    //counterDoners to show an increment the counter of doners
    const { counter: counterDoners, increment: incrementDoners } = useCounter( doners );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(donationValue > 0){
            const messageConfirm = `Are you sure you want to donate ${donationValue} to the ${cause} cause?`;
            if( window.confirm(messageConfirm) ){
                //user acept the donation
                setactualAmount( actualAmount + parseInt (donationValue) );
                incrementDoners();
                resetInput();
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


    

    return (
        <div className="form-donation">
            
            <BalloonText 
                amount = { amount }
                actualAmount = { actualAmount }
            />

            <div className="data-block">
                
                <h2>{cause}</h2>

                <ProgressBar amount={ amount } actualAmount={ actualAmount }/>
                {negativeDonation &&
                    <AlertNegSum />
                }
                <h4>Only {daysLeft} day left to fund this project</h4>
                
                <p>
                    Join the { counterDoners } other doners who have already support this project. 
                    Every dolar helps!          
                </p>

                <FormDonation 
                    handleSubmit = { handleSubmit }
                    donationValue = { donationValue }
                    handleChange = { handleChange }
                />

                <small
                    onClick={() => setdescriptionOpen(!descriptionOpen) }
                    href='#'
                >
                    Why give ${ donationValue }?
                </small>

                <div className="row bottom">

                    <CopyLinkButton 
                        text = { () => {
                            return (window.location.href)    
                        }}
                    />
                    
                    <button className="secondary-button">
                         Go to the site!
                    </button>
                </div>
            </div>

            
            <DescribeCause 
                open = { descriptionOpen }
                describe = { describe }
            />
        </div>
    )
}

export default DonationApp;
