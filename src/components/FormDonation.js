import React, { useState } from 'react';
import './FormDonation.css';

const FormDonation = ({ handleSubmit, donationValue, handleChange }) => {

    
    return (
        <form onSubmit={ (e) => handleSubmit(e) }>
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
                Give Now!
            </button>
        </form>
    )
}

export default FormDonation;
