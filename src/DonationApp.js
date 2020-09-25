import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import BalloonText from './components/BalloonText';

import useCounter from './hooks/useCounter';
import getDaysLeft from './helpers/getDaysLeft';

import './DonationApp.css';
import FormDonation from './components/FormDonation';
import DescribeCause from './components/DescribeCause';

const DonationApp = ({ expireDate = new Date(), cause = '', amount = 0, doners = 0, describe='' }) => {

    const daysLeft = getDaysLeft( expireDate );
    const [actualAmount, setactualAmount] = useState( 0 );
    const [donationValue, setDonationValue] = useState( 0 )
    const [descriptionOpen, setdescriptionOpen] = useState(false)
    const { counter: counterDoners, increment: incrementDoners } = useCounter( doners );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const messageConfirm = `Are you sure you want to donate ${donationValue} to the ${cause} cause?`;
        if( window.confirm(messageConfirm) ){
            //el usuario acepta la donacion
            setactualAmount( actualAmount + parseInt (donationValue) );
            incrementDoners();
            resetInput();
        }else{
            //el usuario niega la donacion
            resetInput();
        }
    }

    const handleChange = ({target}) => {
        setDonationValue( target.value );
    };

    const resetInput = () =>{
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

                {donationValue>0 &&
                    <a 
                        onClick={() => setdescriptionOpen(!descriptionOpen) }
                        href='#'
                    >
                        Why give ${ donationValue }?
                    </a>
                }
            </div>

            
            <DescribeCause 
                open = { descriptionOpen }
                describe = { describe }
            />
        </div>
    )
}

export default DonationApp;
