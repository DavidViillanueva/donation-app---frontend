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

    //daysLeft indica la cantidad de dias faltantes para el fin de la causa
    const daysLeft = getDaysLeft( expireDate );
    //actualAmount indica la cantidad recolectada hasta ahora
    const [actualAmount, setactualAmount] = useState( 0 );
    //donationValue es la cantidad de dinero que dona el usuario
    const [donationValue, setDonationValue] = useState( 0 )
    //negativeDonation es una variable tipo bandera para mostrar o no una alerta
    const [negativeDonation, setNegativeDonation] = useState(false)
    //descriptionOpen es una variable tipo bandera para mostrar o no la descripcion de la causa
    const [descriptionOpen, setdescriptionOpen] = useState(false)
    //counterDoners mantiene la cuenta de los Donantes
    const { counter: counterDoners, increment: incrementDoners } = useCounter( doners );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(donationValue > 0){
            //si la donacion es un valor mayor a 0
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
